import './index.scss'
import Header from "../../../components/header"
import CardFavorito from '../../../components/cardFavorito'


export default function Index() {

    

    return (
        <div className='usu2'>
            <Header />
            
            <div className='favo-geral'>
            <h3>PRODUTO E FRETE</h3>
  
                <div className='favorito'>

                <CardFavorito/>
               
                </div>
                

            </div>

        </div>

              
        
    )
}