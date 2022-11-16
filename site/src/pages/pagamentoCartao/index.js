


import './index.scss'
import Button from "../../components/button"
import Header from "../../components/header"

import Storage from 'local-storage'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'


import { buscarProdutoPorId } from '../../api/produtoAPI'
import { API_URL } from '../../api/config'
import { salvarNovoPedido } from '../../api/pedido'
import { toast } from 'react-toastify'

export default function Index() {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');


    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const [itens, setItens] = useState([]);

    const navigate = useNavigate();


    async function salvarPedido() {

        try {
            let produtos = Storage('carrinho');
            let id = Storage('cliente-logado').id;

            let pedido =
            {

                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: vencimento,
                    codSeguranca: cvv,
                    formaPagamento: tipo,

                },
                produtos: produtos
            }

            const r = await salvarNovoPedido(id, pedido);
            toast.dark('Pedido foi inserido com sucesso');
            Storage('carrinho', []);
            navigate('/');

        }
        catch (err) {
            toast.error(err.response.data.erro);
        }

    }

    async function salvarPedido() {

      try {
          let produtos = Storage('carrinho');
          let id = Storage('cliente-logado').id;

          let pedido =
          {
              cupom: cupom,
              frete: frete,
              
              tipoPagamento: 'Cartão',
              cartao: {
                  nome: nome,
                  numero: numero,
                  vencimento: vencimento,
                  codSeguranca: cvv,
                  formaPagamento: tipo,
                  parcelas: parcela
              },
              produtos: produtos
          }

          const r = await salvarNovoPedido(id, pedido);
          toast.dark('Pedido foi inserido com sucesso');
          Storage('carrinho', []);
          navigate('/');

      }
      catch (err) {
          toast.error(err.response.data.erro);
      }

  }

  function calcularTotal() {
    let total = 0;
    for (let item of itens) {
        total = total + item.qtd * item.produto.info.preco;
    }
    return total;
}



async function carregarItens() {
  let carrinho = Storage('carrinho');
  if (carrinho) {

      let temp = [];

      for (let produto of carrinho) {
          let p = await buscarProdutoPorId(produto.id);

          temp.push({
              produto: p,
              qtd: produto.qtd
          })
      }

      setItens(temp);
  }

}


function exibirImagem(item) {
  if (item.produto.imagens.length > 0)
      return API_URL + '/' + item.produto.imagens[0];
  else
      return '/produto-padrao.png';
}


useEffect(() => {

  carregarItens();
}, [])



    return (
        <main className='tela-pagamento'>
<Header/>
<div class="container">

    <div class="card-container">

        <div class="front">
            <div class="image">
                <img src="image/chip.png" alt=""/>
                <img src="image/visa.png" alt=""/>
            </div>
            <div class="card-number-box">################</div>
            <div class="flexbox">
                <div class="box">
                    <span>card holder</span>
                    <div class="card-holder-name">full name</div>
                </div>
                <div class="box">
                    <span>expires</span>
                    <div class="expiration">
                        <span class="exp-month">mm</span>
                        <span class="exp-year">yy</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="back">
            <div class="stripe"></div>
            <div class="box">
                <span>cvv</span>
                <div class="cvv-box"></div>
                <img src="image/visa.png" alt=""/>
            </div>
        </div>

    </div>

    <form action="">
        <div class="inputBox">
            <span>card number</span>
            <input type="text" maxlength="16" class="card-number-input"/>
        </div>
        <div class="inputBox">
            <span>card holder</span>
            <input type="text" class="card-holder-input"/>
        </div>
        <div class="flexbox">
            <div class="inputBox">
                <span>expiration mm</span>
                <select name="" id="" class="month-input">
                    <option value="month" selected disabled>month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div class="inputBox">
                <span>expiration yy</span>
                <select name="" id="" class="year-input">
                    <option value="year" selected disabled>year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div class="inputBox">
                <span>cvv</span>
                <input type="text" maxlength="4" class="cvv-input"/>
            </div>
        </div>
        <input type="submit" value="submit" class="submit-btn"/>
    </form>



    <div className='pedido-box'>
                <h1> Pedido </h1>
                <div className='finalizar'>
                    <div>Total: <span> R$ {calcularTotal()}</span></div>
                    <button onClick={salvarPedido}> Finalizar Pedido </button>
                </div>
            </div>


            

    <div className='itens'>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                          
                            <th>Preço Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {itens.map(item =>
                       
                            <tr>
                                <td>
                                    <div className='celula-item'>
                                        <img src={exibirImagem(item)} />
                                        <div>
                                            <h4> {item.produto.info.produto} </h4>
                                            <h3> {item.produto.info.marca} </h3>
                                        </div>
                                    </div>
                                </td>
                               
                                <td>
                                    R$ {item.produto.info.preco}
                                </td>
                                <td>
                                    R$  {item.qtd * item.produto.info.preco}
                                </td>
                            </tr>
                    )}

                    </tbody>
                </table>
            </div>


                  

            </div> 
            

          
         
        </main >
    )
}