import './index.scss'

import { toast } from 'react-toastify';


import Menu from "../../../components/menu"
import { listarDepartamentos } from '../../../api/departamentoAPI.js'
import { useEffect, useState } from 'react'
import { alterarProduto, buscarProdutoPorId, salvarImagens, salvarProduto } from '../../../api/produtoAPI.js';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../api/config';

export default function Produto() {
    const [idProduto, setIdProduto] = useState();
    
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [desconto, setDesconto] = useState('');
    const [valorantigo, setvalorAntigo] = useState('');
    const [marca, setMarca] = useState('');
    

    const [imagem1, setImagem1] = useState();
    const [imagem2, setImagem2] = useState();
    const [imagem3, setImagem3] = useState();
    const [imagem4, setImagem4] = useState();



    const [idDepartamento, setIdDepartamento] = useState();
    const [departamentos, setDepartamentos] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);


    const { id } = useParams();


    async function salvar() {
        try {
            const prevoProduto = Number(preco.replace(',', '.'));

            if (!id) {
                const r = await salvarProduto(nome, prevoProduto, desconto, valorantigo, marca,  idDepartamento, catSelecionadas);
                await salvarImagens(r.id, imagem1, imagem2, imagem3, imagem4);
    
                toast.dark('Produto cadastrado com sucesso');
            }
            else {
                await alterarProduto(id, nome, prevoProduto, desconto, valorantigo, marca,  idDepartamento, catSelecionadas);
                await salvarImagens(id, imagem1, imagem2, imagem3, imagem4);
    
                toast.dark('Produto alterado com sucesso');
            }

            
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }



    async function carregarDepartamentos() {
        const r = await listarDepartamentos();
        setDepartamentos(r);
    }


    async function carregarProduto() {
        if (!id) return;

        const r = await buscarProdutoPorId(id);
        setIdProduto(r.info.id);
        setNome(r.info.produto);
        setPreco(r.info.preco.toString());
        setDesconto(r.info.desconto.toString());
        setvalorAntigo(r.info.valoantigo.toString());
        setMarca(r.info.marca);

        setIdDepartamento(r.info.departamento);

        if (r.imagens.length > 0) {
            setImagem1(r.imagens[0]);
        }

        if (r.imagens.length > 1) {
            setImagem2(r.imagens[1]);
        }

        if (r.imagens.length > 2) {
            setImagem3(r.imagens[2]);
        }

        if (r.imagens.length > 3) {
            setImagem4(r.imagens[3]);
        }
    }


    function escolherImagem(inputId) {
        document.getElementById(inputId).click();
    }

    function exibirImagem(imagem) {
        if (imagem == undefined) {
            return '/img/icons8-add-image-64.png';
        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
    }



    useEffect(() => {

        carregarDepartamentos();
        carregarProduto();
    }, [])


    return (
        <div className='pagina-admin-produto'>
            <Menu />
            <h1> {id ? 'Alterar Produto' : 'Novo Produto'} </h1>

            <div className='form-container'>

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
                        <label> Desconto: </label>
                        <input type='text' checked={desconto} onChange={e => setDesconto(e.target.checked)} />
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
                        <label> antigo: </label>
                        <input type='text' value={valorantigo} onChange={e => setvalorAntigo(e.target.value)} />
                    </div>

                    <div>
                        <label> marca: </label>
                        <input type='text' checked={marca} onChange={e => setMarca(e.target.checked)} />
                    </div>

                    



                    <div>
                        <button onClick={salvar}> Salvar </button>
                    </div>

                </div>

                <div className='imagens'>
                <div className='opcoes'>
                    
                <img src={exibirImagem(imagem1)} alt="" onClick={() => escolherImagem('imagem1')} />
                        {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}
                       

                        <img src={exibirImagem(imagem2)} alt="" onClick={() => escolherImagem('imagem2')} />
                        {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}


                        <img src={exibirImagem(imagem3)} alt="" onClick={() => escolherImagem('imagem3')} />
                        {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}
                        
                </div>
            
                <div className='atual'>

                <img src={exibirImagem(imagem4)} alt="" onClick={() => escolherImagem('imagem4')} />
                        {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}

                        <input type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])} />
                
                </div>
                
            </div>

                

                
                
            </div>
        </div>
    )
}