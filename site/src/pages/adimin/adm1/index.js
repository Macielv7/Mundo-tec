import Menu from '../../../components/menu'


import { cadastrarProduto, enviarImagemProduto, alterarProduto, buscarPorId, buscarImagem } from '../../../api/produtoAPI'
import storage from 'local-storage'

import './index.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { toast } from 'react-toastify';


export default function Index() {
    const [nome, setNome] = useState('');

    const [preco, setPreco] = useState(0);
    const [disponivel, setDisponivel] = useState(false);
    const [desconto, setDesconto] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);

    const [idDepartamento, setIdDepartamento] = useState();
    const [departamentos, setDepartamentos] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);


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
                const novoproduto = await cadastrarProduto(nome, categoria, preco, disponivel, desconto, usuario);
                await enviarImagemProduto(novoproduto.id, imagem);
                setId(novoproduto.id);

                toast.dark('🚀 produto cadastrado com sucesso!');
            }
            else {
                await alterarProduto(id, nome, categoria, preco, disponivel, desconto, usuario);

                if (typeof (imagem) == 'object')
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

    async function salvar() {
        try {
            const prevoProduto = Number(preco.replace(',', '.'));

            const r = await salvarProduto(nome, prevoProduto, destaque, idDepartamento, catSelecionadas);
            toast.dark('Produto cadastrado com sucesso');
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }


    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }


    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }


    async function carregarDepartamentos() {
        const r = await listarDepartamentos();
        setDepartamentos(r);
    }


    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarDepartamentos();
    }, [])




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
                        </div>
                        <div className='pagina-admin-produto'>
                            <h1> Novo Produto </h1>

                            <div className='form'>

                                <div>
                                    <label> Produto: </label>
                                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                                </div>

                                <div>
                                    <label> Preço: </label>
                                    <input type='text' value={preco} onChange={e => setPreco(e.target.value)} />
                                </div>

                                <div>
                                    <label> Destaque: </label>
                                    <input type='checkbox' checked={destaque} onChange={e => setDestaque(e.target.checked)} />
                                </div>



                                <div>
                                    <label>Departamento:</label>
                                    <select value={idDepartamento} onChange={e => setIdDepartamento(e.target.value)}>
                                        <option selected disabled hidden>Selecione</option>

                                        {departamentos.map(item =>
                                            <option value={item.id}> {item.departamento} </option>
                                        )}
                                    </select>
                                </div>



                                <div>
                                    <label>Categoria:</label>
                                    <div className='gpo-categoria'>
                                        <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                                            <option selected disabled hidden>Selecione</option>

                                            {categorias.map(item =>
                                                <option value={item.id}> {item.categoria} </option>
                                            )}
                                        </select>
                                        <button onClick={adicionarCategoria} className='btn-categoria'>+</button>
                                    </div>
                                </div>
                                <div>
                                    <label></label>
                                    <div className='cat-conteiner'>
                                        {catSelecionadas.map(id =>
                                            <div className='cat-selecionada'>
                                                {buscarNomeCategoria(id)}
                                            </div>
                                        )}
                                    </div>

                                </div>



                                <div>
                                    <button onClick={salvar}> Salvar </button>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

