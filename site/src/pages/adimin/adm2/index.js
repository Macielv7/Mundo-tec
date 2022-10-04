import Menu from '../../../components/menu'


import { listarTodosProduto, buscarProdutoPorNome, removerProduto } from '../../../api/produtoAPI'

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'

import './index.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Index() {
    const [produto, setProduto] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();


    function abrirDetalhes(id) {
        navigate(`/admin/detalhe/${id}`);
    }


    function editarProduto(id) {
        navigate(`/admin/alterar/${id}`);
    }

    async function removerProdutoClick(id, nome) {

        confirmAlert({
            title: 'Remover Produto',
            message: `Deseja remover o produto ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {

                        const resposta = await removerProduto(id, nome);
                        if (filtro === '')
                            carregarTodosProduto();
                        else
                            filtrar();

                        toast.dark('🚀 Produto removido!');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })

    }

    async function filtrar() {
        const resp = await buscarProdutoPorNome(filtro);
        setProduto(resp);
    }

    async function carregarTodosProduto() {
        const resp = await listarTodosProduto();
        setProduto(resp);
    }

    useEffect(() => {
        carregarTodosProduto();
    }, [])



    return (
        <main className='page page-consultar'>
            <Menu selecionado='consultar' />
            <div className='container'>


                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar produto por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                    </div>

                    <table>
                        <div className='comp-detalhe'>
                            <img alt='' />
                            <div className='box-info'>
                                <h1>  </h1>
                                <div className='info'>
                                    <h3>Lançamento</h3>
                                    <p></p>
                                </div>
                                <div className='info'>
                                    <h3>Sinopse</h3>
                                    <p className='sinopse'>  </p>
                                </div>
                                <div className='info'>
                                    <h3>Avaliação</h3>
                                    <p> </p>
                                </div>
                                <div className='info'>
                                    <h3></h3>
                                </div>
                            </div>
                        </div>
                        <tbody>

                            {produto.map(item =>
                                <tr key={item.id} onClick={() => abrirDetalhes(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.desconto}</td>
                                    <td>{item.preco.substr(0, 10)}</td>
                                    <td>{item.disponivel ? 'Sim' : 'Não'}</td>
                                    <td>
                                        <img src='./img/icons8-lápis-64.png' alt='editar'
                                            onClick={e => {
                                                e.stopPropagation();
                                                editarProduto(item.id);
                                            }} />

                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <img src='./img/icons8-remover-24.png' alt='remover'
                                            onClick={e => {
                                                e.stopPropagation();
                                                removerProdutoClick(item.id, item.nome);
                                            }} />
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>

                </div>
            </div>
        </main>
    )
}

