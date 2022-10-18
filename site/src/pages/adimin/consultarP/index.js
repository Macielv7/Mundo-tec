import './index.scss'
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useEffect, useState} from 'react'
import { buscarProdutos, removerProduto } from '../../../api/produtoAPI';
import { useNavigate } from 'react-router-dom';
import Menu from "../../../components/menu"

export default function ConsultarProduto() {
    const [produtos, setProdutos] = useState([]);


    const navigate = useNavigate();


    async function carregarProdutos() {
        const r = await buscarProdutos();
        setProdutos(r);
    }

    

    async function deletarProduto (id, nome){

        confirmAlert({
            title: 'Remover Produto',
            message: `deseja remover o Produto ${id, nome}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await removerProduto (id,nome);
                          if(filtro === ''){
                            carregarProdutos();
                      }
                          else
                          
                          toast.dark('Produto removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

        
    }

    function editar(id) {
        navigate(`cadastrarp ${id}`)
    }


    useEffect(() => {
        carregarProdutos();
    }, []);



    return (
        <div className='pagina-admin-consultar-produto'>
            <Menu/>
            <h1> Catálogo de Produtos </h1>

            <div className='form'>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Destaque</th>
                            <th>Departamento</th>
                            <th>valorantigo</th>
                            <th>Marca</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(item =>
                            <tr>
                              
                                <td> {item.id} </td>
                                <td> {item.produto} </td>
                                <td>R$ {item.preco}</td>
                                <td> {item.destaque ? 'Sim' : 'Não'} </td>
                                <td> {item.departamento} </td>
                                <td><s> {item.valorantigo}</s> </td>
                                <td> {item.marca} </td>

                                
                                <img src="./img/icons8-lápis-64.png"  onClick={() => editar(item.id)} />
                              
                                <img src="./img/icons8-remover-24.png"  onClick={() => deletarProduto(item.id)} />
                            </tr>    
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    )

}