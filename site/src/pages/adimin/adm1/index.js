import Menu from '../../../components/menu'


import { cadastrarProduto, enviarImagemProduto, alterarProduto, buscarPorId, buscarImagem } from '../../../api/produto'
import storage from 'local-storage'

import './index.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ToastContainer ,toast } from 'react-toastify';






export default function Index() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [desconto, setDesconto] = useState('');
    const [preco, setPreco] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [imagem, setImagem] = useState();
 


    




    async function salvarClick(){
        try{      
            if (!imagem)
            throw new Error('escolha a imagem do produto');
            const Novoproduto = await cadastrarProduto (nome,categoria,departamento,preco,desconto,disponivel);
            const r = await enviarImagemProduto(Novoproduto.id, imagem);
            toast.dark('Acho q foi');
        }
        catch (err){
            if(err.response)
            toast.error(err.response.data.erro)
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




    return (
        <main className='page page-cadastrar'>
            <Menu selecionado='cadastrar' />
            <ToastContainer />
            <div className='container'>
                
                
                <div className='conteudo'>
                    <section>
                        

                        <div className='form-colums'>
                            <div>
                            <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Produto</h1>
                                <div className='upload-capa' onClick={escolherImagem}>
                                    
                                    {!imagem &&
                                        < img  src="./img/icons8-add-image-64.png" alt="" />
                                    }

                                    {imagem &&
                                        <img className='imagem' src={mostrarImagem()} alt='' />
                                    }

                                    <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                                </div>
                            </div>
                            <div>
                                <div className='form-row'>
                                    <label>Descriçao do produto:</label>
                                    <input type='text' placeholder='Nome do Produto' value={nome} onChange={e => setNome(e.target.value)} />
                                </div>

                                <div className='form-row'>
                                    <label>Desconto:</label>
                                    <input type='number' placeholder='0' value={desconto} onChange={e => setDesconto(e.target.value)} />
                                </div>

                                <div className='form-row'>
                                    <label>Preço:</label>
                                    <input type='number' value={preco} onChange={e => setPreco(e.target.value)} />
                                </div>

                                <div className='form-row'>
                                    <label>Departamento:</label>
                                    <input type='text' placeholder='Nome do Produto' value={departamento} onChange={e => setDepartamento(e.target.value)} />
                                </div>

                                <div className='form-row'>
                                    <label>Categoria:</label>
                                    <input type='text' placeholder='Nome do Produto' value={categoria} onChange={e => setCategoria(e.target.value)} />
                                </div>
                               
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
                                   
                                        <button onClick={salvarClick}>CADASTRAR</button> 
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