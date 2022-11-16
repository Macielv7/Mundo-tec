import './index.scss'
import { listar } from '../../api/usuario'
import { useEffect, useState } from 'react'
import Storage, { set } from 'local-storage'

export default function CardEndereco() {

    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);

    async function carregarEnderecos() {
        const id = Storage('usuario-logado').id;
        const r = await listar(id);
        setEnderecos(r);
    }



    useEffect(() => {
        carregarEnderecos();
      
    }, [])

    return (
        <div className='comp-card-endereco'
           
        >
            {enderecos.map(item =>
            <div>
                <div className='end'>{item.rua}, {item.numero} - {item.complemento}</div>
                <div className='cep'> {item.cep}- {item.bairro}, {item.cidade}/{item.estado}</div>
            </div>
            )}
        </div>
    )
}

