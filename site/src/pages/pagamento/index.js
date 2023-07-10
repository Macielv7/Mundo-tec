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
            <div className='pagina-pedido'>



                <div className='pedido-box'>
                    <h1> Pedido </h1>
                </div>


                <div className='info'>
                    <div className='itens'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantidade</th>
                                    <th>Preço Unitário</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <td>
                                        <div className='celula-item'>
                                            <img src="./img/note.jpg" />
                                            <div>
                                                <h3>wedrftgyhunjmk </h3>
                                                <h4> dghnh </h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        8
                                    </td>
                                    <td>
                                        R$ 5677
                                    </td>
                                    <td>
                                        R$ 24345787
                                    </td>
                                </tr>


                            </tbody>
                            
                        </table>
                    </div>

                    <div className='pagamento-box'>
                        <h2>Pagamento</h2>

                        <div className='form'>
                            <div>
                                <label>Nome:</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Número:</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Validade:</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>CVV:</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Tipo de Pagamento:</label>
                                <select   >
                                    <option disabled hidden selected>Selecione</option>
                                    <option>Crédito</option>
                                    <option>Débito</option>
                                </select>
                            </div>
                            <div>
                                <label>Parcelas:</label>
                                <select  >
                                    <option disabled hidden selected>Selecione</option>
                                    <option value={1}>01x à Vista</option>
                                    <option value={1}>01x sem Juros</option>
                                    <option value={2}>02x sem Juros</option>
                                    <option value={3}>03x sem Juros</option>
                                </select>
                            </div>
                            <div />
                            <div className='info-extra'>
                            <div>
                                <h2> Cupom </h2>
                                <div className='form'>
                                    <div>
                                        <label>Código:</label>
                                        <input type='text' />
                                    </div>
                                    <div />
                                </div>
                            </div>
                            <div>
                                <h2> Frete </h2>
                                <div className='form'>
                                    <div>
                                        <label>Tipo:</label>
                                        <select  >
                                            <option disabled hidden selected>Selecione</option>
                                            <option value={'Normal'}>Normal - R$ 10,00</option>
                                            <option value={'Sedex'}>Sedex - R$ 25,00</option>
                                        </select>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                        </div>

                        
                    </div>
                </div>
                

            </div>
        </main >
    )
}