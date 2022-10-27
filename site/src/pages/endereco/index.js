import { useState } from 'react'
import './index.scss'
import { salvar } from '../../api/usuario';
import Storage from 'local-storage'
import { toast } from 'react-toastify'

export default function ModalEndereco() {

    const [cep, setCEP] = useState('');
    const [rua, setrua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');


    async function salvarEndereco() {
        try {
            const id = Storage('cliente-logado').id;
            const r = await salvar(id, cep, rua, bairro, cidade, estado, numero, complemento);
            toast.dark('Endereço salvo');

          
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }   


    return (
        <div className='comp-modal-endereco'>
            <div >
                <div className='conteudo'>
                    <h1> Novo Endereço </h1>

                    <div className='form'>
                       
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> CEP: </label>
                            <input type='text' value={cep}  onChange={e => setCEP(e.target.value)}  />
                        </div>
                        <div>
                            <label> rua: </label>
                            <input type='text' value={rua}  onChange={e => setrua(e.target.value)}  />
                        </div>
                        <div>
                            <label> Número: </label>
                            <input type='text' value={numero}  onChange={e => setNumero(e.target.value)}  />
                        </div>
                        <div>
                            <label> Complemento: </label>
                            <input type='text' value={complemento}  onChange={e => setComplemento(e.target.value)}  />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> Bairro: </label>
                            <input type='text' value={bairro}  onChange={e => setBairro(e.target.value)}  />
                        </div>
                        <div>
                            <label> Cidade: </label>
                            <input type='text' value={cidade}  onChange={e => setCidade(e.target.value)}  />
                        </div>
                        <div>
                            <label> Estado: </label>
                            <input type='text' value={estado}  onChange={e => setEstado(e.target.value)}  />
                        </div>
                        <div>
                            <label></label>
                            <div className='btn'>
                                <button onClick={salvarEndereco}> Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}