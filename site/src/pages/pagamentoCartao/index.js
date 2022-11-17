import './index.scss'

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

    const [idEndereco, setIdEndereco] = useState();

    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const [itens, setItens] = useState([]);

    const navigate = useNavigate();


    async function salvarPedido() {

        try {
            let produtos = Storage('carrinho');
            let id = Storage('usuario-logado').id;

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
            let id = Storage('usuario-logado').id;

            let pedido =
            {

                idEndereco: idEndereco,
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
            <Header />
            <div className='pedido-box'>
                <div class="container">

                    <div class="card-container">

                        <div class="front">
                            <div class="image">
                                <img src="image/chip.png" alt="" />
                                <img src="image/visa.png" alt="" />
                            </div>
                            <div class="card-number-box">000000000000</div>
                            <div class="flexbox">
                                <div class="box">
                                    <span>card holder</span>

                                </div>
                                <div class="box">
                                    <span>expires</span>

                                </div>
                            </div>
                        </div>

                        <div class="back">
                            <div class="stripe"></div>
                            <div class="box">
                                <span>cvv</span>
                                <div class="cvv-box"></div>
                                <img src="image/visa.png" alt="" />
                            </div>
                        </div>

                    </div>

                    <form action="">
                        <div class="inputBox">
                            <span>Nome</span>
                            <input type="text" maxlength="16" class="card-number-input" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div class="inputBox">
                            <span>Numero</span>
                            <input type="text" class="card-holder-input" value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <div class="inputBox">
                            <span>Validade</span>
                            <input type="text" class="card-holder-input" value={vencimento} onChange={e => setVencimento(e.target.value)} />
                        </div>
                        <div class="flexbox">

                            <div class="inputBox">
                                <span>cvv</span>
                                <input type="text" maxlength="4" class="cvv-input" value={cvv} onChange={e => setCvv(e.target.value)} />
                            </div>
                            <div class="inputBox">

                                <span>Validade</span>
                                <select name="" id="" class="month-input" value={tipo} onChange={e => setTipo(e.target.value)}  >

                                    <option disabled hidden selected>Selecione</option>
                                    <option>Crédito</option>
                                    <option>Débito</option>

                                </select>
                            </div>
                            <div class="inputBox">
                                <span>Parcelas</span>
                                <select name="" id="" class="year-input" value={parcela} onChange={e => setParcela(e.target.value)}>
                                    <option disabled hidden selected>Selecione</option>
                                    <option value={1}>01x à Vista</option>
                                    <option value={1}>01x sem Juros</option>
                                    <option value={2}>02x sem Juros</option>
                                    <option value={3}>03x sem Juros</option>
                                    <option value={4}>04x sem Juros</option>
                                    <option value={5}>05x sem Juros</option>
                                    <option value={6}>06x sem Juros</option>
                                    <option value={7}>07x sem Juros</option>
                                    <option value={8}>08x sem Juros</option>
                                    <option value={9}>09x sem Juros</option>
                                    <option value={10}>10x sem Juros</option>
                                    <option value={11}>11x sem Juros</option>
                                    <option value={12}>12x sem Juros</option>
                                </select>
                            </div>

                        </div>
                        <button class="submit-btn" onClick={salvarPedido}>
                            Finalizar
                        </button>
                    </form>



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



                <div className='pedido-box'>
                    <h1> Pedido </h1>
                    <div className='finalizar'>
                        <div>Total: <span> R$ {calcularTotal()}</span></div>

                    </div>
                </div>

            </div>





        </main >
    )
}