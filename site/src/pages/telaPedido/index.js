import './index.scss'
import Header from "../../components/header"
import FlashDeals from "../../components/flashCard"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Storage from 'local-storage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { buscarProdutoPorId } from '../../api/produtoAPI';
import { API_URL } from '../../api/config';

export default function ProdutoDetalhe() {
    const [produto, setProduto] = useState({ categorias: [], imagens: [], info: {} })
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();



   

    async function carregarPagina() {
        const r = await buscarProdutoPorId(id);
        setProduto(r);
    }


    function exibirImagemPrincipal(e) {

        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal];

        }

        else {
            return '/download.png';

        }
    }



    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
    }


    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }


        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho);

        }

        toast.dark('Produto adicionado ao carrinho!');
    }


    useEffect(() => {
        carregarPagina();
    }, [])


    return (
        <div>
            <Header />
            <div className='pagina-detalhe-produto'>

                <div className='produto'>

                    <div className='imagens'>
                        <div className='opcoes'>
                            {produto.imagens.map((item, pos) =>
                                <img src={exibirImagemProduto(item)} onClick={() => setImagemPrincipal(pos)} />
                            )}
                        </div>
                        <div className='atual'>
                            <img src={exibirImagemPrincipal()}
                                draggable={false}
                                
                            />
                        </div>
                    </div>

                    <div className='detalhess'>
                        <div className='namme'> {produto.info.produto} </div>
                        <div className='departamento'> {produto.info.nomeDepartamento} </div>

                        <div className='antigo'> <s> R$ {produto.info.valorantigo} </s> </div>
                        <div className='preco'> R$ {produto.info.preco} </div>

                        <button onClick={adicionarAoCarrinho}> Adicionar ao Carrinho </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

