import './index.scss'
import Header from "../../../components/header"
import Menu from "../../../components/menu"

export default function Index() {

    

    return (
        <div className='usu1'>
            <Header />
            
            <div className='mae'>

                <div className='retangulo'>
                    <img src='./img/5087579.png' className='circo'/>
                    <h3>Bem-vindo, <br/><span>macielvinicius281@gmail.com</span></h3>
                    
                    <a href='#'>
                    <img src="./img/icons8-engrenagem-24.png" className='' />
                    </a>
                </div>
               
                <div >
                    <h6 className='fonte'>RESUMO DO SEU ÚLTIMO PEDIDO</h6>
                </div>

                <div className='geral-mom'>

                    <div className='numero'>
                        <p className='title'> NÚMERO DO PEDIDO </p>
                        <p className='desc'> #30432868 </p>
                    </div>


                    <div className='status'>
                        <p className='title'>STATUS</p>
                        <p className='desc'>Cancelado </p>
                    </div>

                    <div className='data'>
                        <p className='title'>DATA</p>
                        <p className='desc'>09/11/2022</p>
                    </div>

                    <div className='pagamento'>
                        <p className='title'>PAGAMENTO</p>
                        <p className='desc'>PIX</p>
                    </div>


                </div>
               <hr/>
                <div className='geral-momm'>

                    <div className='ender'>
                        <p className='title'> ENDERECO </p>

                        <div className='end'>numero 34 - jardin sipramar</div>
                        <div className='cep'>cep 75674-756 sao paulo-sp</div>

                    </div>


                </div>


            </div>
        </div>
    )
}