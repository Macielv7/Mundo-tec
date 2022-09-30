import Menu from '../../../components/menu'


import { cadastrarProduto, enviarImagemProduto, alterarProduto, buscarPorId, buscarImagem } from '../../../api/produto'
import storage from 'local-storage'

import './index.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { toast } from 'react-toastify';


export default function Index() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState(0);
    const [disponivel, setDisponivel] = useState(false);
    const [desconto, setDesconto] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);


    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
            carregarproduto();
        }
    }, [])


    async function carregarproduto() {
        const resposta = await buscarPorId(idParam);
        setNome(resposta.nome);
        setCategoria(resposta.categoria);
        setPreco(resposta.preco);
        setDisponivel(resposta.disponivel);
        setDesconto(resposta.desconto.substr(0, 10));
        
        setId(resposta.id);
        setImagem(resposta.imagem);
    }


    async function salvarClick() {
        try {
            if (!imagem)
                throw new Error('Escolha a capa do produto.');

            const usuario = storage('usuario-logado').id;
            
            if (id === 0) {
                const novoproduto = await cadastrarProduto(nome, categoria, preco, disponivel, desconto,  usuario);
                await enviarImagemProduto(novoproduto.id, imagem);
                setId(novoproduto.id);

                toast.dark('🚀 produto cadastrado com sucesso!');
            }
            else {
                await alterarProduto(id, nome, categoria, preco, disponivel, desconto, usuario);

                if (typeof(imagem) == 'object')
                    await enviarImagemProduto(id, imagem);
                
                toast.dark('🚀 produto alterado com sucesso!');
            }
            
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else 
                toast.error(err.message);
        }
    }


    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem);
        }
    }

    function novoClick() {
        setId(0);
        setNome('');
        setPreco(0);
        setCategoria('');
        setDisponivel(true);
        setDesconto(0);
        setImagem();
    }


    return (
        <main className='page page-cadastrar'>
            <Menu selecionado='cadastrar' />
            <div className='container'>
                
                
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo produto</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='upload-capa' onClick={escolherImagem}>
                                    
                                    {!imagem &&
                                        <img src="/assets/images/icon-upload.svg" alt="" />
                                    }

                                    {imagem &&
                                        <img className='imagem-capa' src={mostrarImagem()} alt='' />
                                    }

                                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                                </div>
                            </div>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do produto' value={nome} onChange={e => setNome(e.target.value)} />
                                </div>
                                <div className='form-row'>
                                    <label>preco:</label>
                                    <input type='number' placeholder='0' value={preco} onChange={e => setPreco(e.target.value)} />
                                </div>
                                <div className='form-row'>
                                    <label>categoria:</label>
                                    <input type='date' value={categoria} onChange={e => setCategoria(e.target.value)} />
                                </div>
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} /> &nbsp; Disponível
                                </div>
                            </div>
                            <div>
                               
                                <br />
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button onClick={salvarClick}> {id === 0 ? 'SALVAR' : 'ALTERAR'} </button> &nbsp; &nbsp;
                                        <button onClick={novoClick}>NOVO</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

