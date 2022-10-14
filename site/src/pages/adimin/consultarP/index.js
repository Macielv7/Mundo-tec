import './index.scss';

import {toast} from 'react-toastify';
import { useEffect, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { confirmAlert } from 'react-confirm-alert'
import { listarTodosProdutos, buscarProdutoNome, deletaProduto } from '../../../api/produtoAPI.js';



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

    async function deletaProduto(id) {
       
        try{ 
            

            toast.dark("Produto Removido com Sucesso");
        }
        catch(err) {
         toast.error(err.response.data.erro);
        }

}


    return (
        <div className='pagina-admin-consultar-produto'>
            <h1> Catálogo de Produtos </h1>

            <div className='cont-busca-estoque'>
                        <input className='input-pesquisa-estoque' placeholder='Buscar por nome' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                        <button className='botao-pesquisa-estoque' onClick={filtrar}>
                           
                        </button>
                    </div>

            <div className='form'>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>nome</th>
                            <th>Preço</th>
                            <th>Desconto</th>
                            <th>Departamento</th>
                            <th>valorantigo</th>
                            <th>Marca</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produto.map(item =>
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.nome} </td>
                                <td>R$ {item.preco}</td>
                                <td> {item.desconto} </td>
                                <td> {item.departamento} </td>
                                <td> {item.valorantigo} </td>
                                <td> {item.marca} </td>

                                
                                <td><span onClick={() => removerProduto(item.id)}>Remover</span></td>
                            </tr>    
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

