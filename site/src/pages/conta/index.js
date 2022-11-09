

import React from "react"
import "./index.scss"
import { useEffect, useState } from 'react';

import { listarProdutosInicio } from '../../api/produtoAPI'
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header"
import Rodape from "../../components/rodape"
import FlashCard from "../../components/flashDeals/FlashCard"






export default function Index () {
  

    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

    async function listar() {
        const r = await listarProdutosInicio();
        setProdutos(r);
    }


    useEffect(() => {
        listar();
    }, [])


    return (
        <main className="home-inicio">

       <Header />
       


       <div class="tudo">
        <div class="nome">
            <img src="" alt=""/>
        </div>
        <div className="mo">

       
        </div>
</div>
   


       <div className="produtos-container">
                
                   
       {produtos.map(item => 
                    <FlashCard item={item} />
                )}
                
             
            </div>
            <div className="con">
                <img src="./img/cadeira.jfif" alt="" />
                <img src="./img/cadeira.jfif" alt="" />
            </div>


            <div className="produtos-container">
                
              
              
            {produtos.map(item => 
                    <FlashCard item={item} />
                )}
            
         
        </div>
            
           
           

            <div className='texto-cabecalho'>
                <div>

                

                    

                <div className="imagem-oferta">
                        <img src="./img/pp.png" height="322px" alt="" />
                    </div>
                    
               
                    



                    <div class="tt">
                        <h1>Departamento</h1>
                    </div>


                    <div class="os">

                        <div class="lk">
                            <h1>Periféricos </h1>
                            <img src="./img/perifericos.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Celular</h1>
                            <img src="./img/celular.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>TV</h1>
                            <img src="./img/tv.png" alt="" />


                        </div>
                    </div>



                    <div class="os">
                        <div class="lk">
                            <h1>Casa Inteligente </h1>
                            <img src="./img/casa.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Hardware</h1>
                            <img src="./img/hader.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>Games</h1>
                            <img src="./img/g.png" alt="" />


                        </div>
                    </div>

                    <div class="os">
                        <div class="lk">
                            <h1>Espaço Gamer </h1>
                            <img src="./img/espacogamr.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Câmeras e Drones</h1>
                            <img src="./img/cameras.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>Áudio</h1>
                            <img src="./img/audio.png" alt="" />


                        </div>
                    </div>

                    <hr />

                    <div class="car">
                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >

                            <h3 >Frete Grátis para todo Brasil
                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >

                            <h3 >5% de desconto no pix
                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >

                            <h3 >Parcele em até 12x

                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >

                            <h3 >Site seguro

                            </h3>
                        </div>

                    </div>
                    <hr />

                    <Rodape/>    

                </div>
            </div>

        </main>
    )
}

