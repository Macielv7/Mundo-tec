

import React from "react"
import "./index.scss"
import { useEffect, useState } from 'react';

import { listarProdutosInicio } from '../../api/produtoAPI'

import Header from "../../components/header"
import FlashCard from "../../components/flashDeals/FlashCard"






export default function Index () {
    const [produtos, setProdutos] = useState([]);

    async function listar() {
        const r = await listarProdutosInicio();
        setProdutos(r);
    }


    useEffect(() => {
        listar();
    }, [])




    return (
        <>

       <Header />
       

       <div className="produtos-container">
                
                    {produtos.map(item =>
                       
               <FlashCard  item={item}/>
                
               )}
            </div>

<div>
     <li>
       <a href="#">
         <i class='bx bx-cog' ></i>
         <span class="links_name">Setting</span>
       </a>
       <span class="tooltip">Setting</span>
     </li>
     <li class="profile">
         <div class="profile-details">
           <img src="profile.jpg" alt="profileImg"/>
           <div class="name_job">
             <div class="name">Prem Shahi</div>
             <div class="job">Web designer</div>
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>
   
  </div>
       
            
           
           

            <div className='texto-cabecalho'>
                <div>

                

                    

                   
                    
               
                    



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

               

                </div>
            </div>

        </>
    )
}

