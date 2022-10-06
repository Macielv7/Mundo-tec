import './index.scss'

import { toast } from 'react-toastify';


import { listarCategorias } from '../../../api/categoriaAPI'
import { listarDepartamentos } from '../../../api/departamentoAPI'
import { useEffect, useState } from 'react'
import { alterarProduto, buscarProdutoPorId, salvarImagens, salvarProduto } from '../../../api/produtoAPI';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../api/config';

export default function Produto() {
    const [idProduto, setIdProduto] = useState();
    
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [disponivel, setDisponivel] = useState('');
    const [desconto, setDesconto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [destaque, setDestaque] = useState(true);


    const [imagem, setImagem] = useState('');


    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);

    const [idDepartamento, setIdDepartamento] = useState();
    const [departamentos, setDepartamentos] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);


    const { id } = useParams();


    

    




    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }

    function removerCategoria(id) {
        const x = catSelecionadas.filter(item => item != id);
        setCatSelecionadas(x);
    }


    function adicionarCategoria() {
        if (!idCategoria) return;
        
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }


    async function carregarDepartamentos() {
        const r = await listarDepartamentos();
        setDepartamentos(r);
    }

    async function salvar() {
        try {
            const prevoProduto = Number(preco.replace(',', '.'));

            const r = await salvarProduto(nome, prevoProduto, idDepartamento, catSelecionadas);
            toast.dark('Produto cadastrado com sucesso');
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }


    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }

    async function carregarProduto() {
        if (!id) return;

        const r = await buscarProdutoPorId(id);
        setIdProduto(r.info.id);
        setNome(r.info.produto);
        setNome(r.info.desconto);
        setNome(r.info.disponivel);
        setPreco(r.info.preco.toString());
        setDestaque(r.info.destaque);
        setNome(r.info.descricao);
        setIdDepartamento(r.info.departamento);
        setCatSelecionadas(r.categorias);

       

       
    }


    function escolherImagem(inputId) {
        document.getElementById(inputId).click();
    }

    function exibirImagem(imagem) {
        if (imagem == undefined) {
            return '/image.svg';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }



    useEffect(() => {
        carregarCategorias();
        carregarDepartamentos();
        carregarProduto();
    }, [])


    return (
        <main className='pagina-admin-produto'>
            
            <div className='container'>

                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo produto</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='upload-capa' onClick={escolherImagem}>

                                    {!imagem &&
                                        <img src="./img/icons8-add-image-64.png" alt="" />
                                    }

                                    {imagem &&
                                        <img className='imagem-capa'  alt='' />
                                    }

                                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                                </div>
                            </div>
                        

                            <div className='form'>

                                <div>
                                    <label> Produto: </label>
                                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                                </div>

                                <div>
                                    <label> Descricao: </label>
                                    <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
                                </div>

                                <div>
                                    <label> Preço: </label>
                                    <input type='text' value={preco} onChange={e => setPreco(e.target.value)} />
                                </div>

                                <div>
                                    <label> Desconto: </label>
                                    <input type='text' value={desconto} onChange={e => setDesconto(e.target.value)} />
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

                                <div className='form-row'>
                                    <label></label>
                                    <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} /> &nbsp; Disponível
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