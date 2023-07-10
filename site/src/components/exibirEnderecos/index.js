import { useState } from 'react'
import './index.scss'
import { salvar } from '../../api/usuario';
import Storage from 'local-storage'
import { toast } from 'react-toastify'

export default function ModalEndereco({ exibir, fechar }) {


    const [cep, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');


    async function salvarEndereco() {
        try {
            const id = Storage('usuario-logado').id;
            const r = await salvar(id, cep, rua, bairro, cidade, estado, numero, complemento);
            toast.dark('Endereço salvo');

            fechar();
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }   


    return (
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    <h1> Novo Endereço </h1><span>x</span>

                    <div className='form'>
                        <div>
                            <label> Referência: </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> CEP: </label>
                            <input type='text'  />
                        </div>
                        <div>
                            <label> Logradouro: </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label> Número: </label>
                            <input type='text'   />
                        </div>
                        <div>
                            <label> Complemento: </label>
                            <input type='text'   />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> Bairro: </label>
                            <input type='text'  />
                        </div>
                        <div>
                            <label> Cidade: </label>
                            <input type='text'  />
                        </div>
                        <div>
                            <label> Estado: </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label></label>
                            <div className='btn'>
                                <button > Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}