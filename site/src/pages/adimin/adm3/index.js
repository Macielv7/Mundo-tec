import './index.scss';

import {toast} from 'react-toastify';
import { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'

import { confirmAlert } from 'react-confirm-alert'

import Menu from '../../../components/menu';

import { listarTodosProdutos, buscarProdutoNome,deletaProduto } from '../../../api/produtoAPI.js';
import { API_URL } from '../../../api/config';


export default function ConsEstoque() {

    const [produto, setProduto] = useState([]);
    const [filtro, setFiltro] = useState('');
   

    async function filtrar(){
        const x = await buscarProdutoNome(filtro);
        setProduto(x);
    } 

    async function carregarTodosProdutos() {
        const r = await listarTodosProdutos();
        setProduto(r);
    }



    async function removerProduto (id, nome){

        confirmAlert({
         
            title: 'Remover Produto',
            message: `deseja remover o Produto ${id, nome}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await deletaProduto (id,nome);
                          if(filtro === ''){
                            carregarTodosProdutos()
                         
                      }
                          else
                          filtrar();
                          toast.dark('Produto removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

       
        
    }



    useEffect(() => {
        carregarTodosProdutos();
    }, [])

    async function deletarProduto(id) {
       
        try{ 
            

            toast.dark("Produto Removido com Sucesso");
        }
        catch(err) {
         toast.error(err.response.data.erro);
        }

}

    return (
        <main className='cont-main-estoque'>
            <section className='cont-cabecalho-estoque'>
                <Menu />
            </section>
            <section className='cont-001-estoque'>
                <div className='cont-titulo-busca'>
                    <div className='cont-titulo-estoque'>
                        
                        <h1 className='titulo-estoque'>
                            Consultar Produtos
                        </h1>
                    </div>
                    <div className='cont-busca-estoque'>
                        <input className='input-pesquisa-estoque' placeholder='Buscar por nome' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                        <button className='botao-pesquisa-estoque' onClick={filtrar}>
                           
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>imagem</th>
                            <th>ID Departamento</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Valor antigo</th>
                        </tr>
                    </thead>
                    <tbody>
                  
  

                        {produto.map(item =>
                            <tr>
                               <img src={`${API_URL}/${item.imagem}`}  className="signer" />
                                
                             <td>{item.departamento}</td>
                                <td>{item.nome}</td>
                                <td>R$ {item.preco}</td>
                                <td>% {item.desconto}</td>
                                <td>R$ {item.antigo}</td>
                                
                                    <img src="/img/icons8-remover-24.png" onClick ={() => removerProduto(item.id)} />
                            </tr>

                        )}

                    </tbody>
                </table>
            </section>
        </main>
    )
}