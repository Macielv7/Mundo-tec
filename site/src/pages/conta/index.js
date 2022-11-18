

import React from "react"
import "./index.scss"
import { useEffect, useState } from 'react';

import { listarProdutosInicio, buscardepartamento } from '../../api/produtoAPI'
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header"
import Rodape from "../../components/rodape"
import FlashDeals from "../../components/flashCard/flas"

import { API_URL } from '../../api/config';




export default function Index() {


    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();



    function Departamento(id) {
        navigate(`/camerasdrones/${id}`)
    }


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




            <section class="home" id="home">



                <img src="./img/branco.png" class="wave" alt="" />

            </section>


            <FlashDeals />


            <div className="con">
                <img src="./img/cadeira.jfif" alt="" />
                <img src="./img/cadeira.jfif" alt="" />
            </div>


            <FlashDeals />


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
                            <a href="/celular">
                                <img src="./img/celular.png" alt="" />
                            </a>

                        </div>

                        <div class="lk" >
                            <h1>TV</h1>
                            <a href="/tv">
                                <img src="./img/tv.png" alt="" />

                            </a>
                        </div>
                    </div>



                    <div class="os">
                        <div class="lk">
                            <h1>Casa Inteligente </h1>
                            <a href="/casainteligente">
                                <img src="./img/casa.png" alt="" />
                            </a>

                        </div>

                        <div class="lk">
                            <h1>Hardware</h1>
                            <a href="/hardware">
                                <img src="./img/hader.png" alt="" />
                            </a>

                        </div>

                        <div class="lk" >
                            <h1>Games</h1>
                            <a hreft="gamer">
                                <img src="./img/g.png" alt="" />
                            </a>

                        </div>
                    </div>

                    <div class="os">
                        <div class="lk">

                            <h1>Espaço Gamer </h1>
                            <a hreft="/espacogamer">
                                <img src="./img/espacogamr.png" alt="" />

                            </a>

                        </div>

                        <div class="lk">
                            <h1>Câmeras e Drones</h1>
                            <a href="camerasdrones">
                                <img src="./img/cameras.png" alt="" />

                            </a>
                        </div>

                        <div class="lk" >
                            <h1>Áudio</h1>
                            <a href="/audio">
                                <img src="./img/audio.png" alt="" />
                            </a>

                        </div>
                    </div>

                    <hr />

                    <div class="car">
                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >
                            <img src="./img/icone-noire-camion.png" />
                            <h3 >Frete Grátis para todo Brasil
                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >
                            <img src="./img/pix.png" />
                            <h3 >5% de desconto no pix
                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >
                            <img src="./img/4021708.png" />
                            <h3 >Parcele em até 12x

                            </h3>
                        </div>

                        <div >
                            <img src="/tudo/5/img/carr.png" alt="" />
                        </div>
                        <div >
                            <img src="./img/seguracao.png" />
                            <h3 >Site seguro

                            </h3>
                        </div>

                    </div>
                    <hr />

                    <Rodape />

                </div>
            </div>

        </main>
    )
}

