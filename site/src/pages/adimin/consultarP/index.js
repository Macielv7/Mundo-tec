import './index.scss';

import {toast} from 'react-toastify';
import { useEffect, useState } from 'react';
import Menu from "../../../components/menu"



import { listarTodosProdutos, buscarProdutoNome, } from '../../../api/produtoAPI.js';

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

    useEffect(() => {
        carregarTodosProdutos();
    }, [])

    async function deletarProduto(id) {
       
        try{ 
          
            await carregarTodosProdutos();

            toast.dark("Produto Removido com Sucesso");
        }
        catch(err) {
         toast.error(err.response.data.erro);
        }

}

    return (
        <main className='cont-main-estoque'>
            <section className='cont-cabecalho-estoque'>
                <Menu/>
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
                                <td>{item.idDepartamento}</td>
                                <td>{item.nomeProduto}</td>
                                <td>{item.valorProduto}</td>
                                <td>{item.valorDesconto}</td>
                                <td>{item.avaliacao}</td>
                                <td>{item.fabricante}</td>
                                <td>{item.estoque}</td>
                                <td>{item.informações}</td>
                                <td>{item.descricao}</td>
                                <td>{item.garantia}</td>
                                <td>

                                    
                                </td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </section>
        </main>
    )
}