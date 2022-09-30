

import React from "react"
import "./index.scss"

import FlashDeals from "../../components/flashDeals/FlashDeals"

import Header from "../../components/header"





const Index = ({ productItems, addToCart,  }) => {
    return (
        <>

       <Header />

       <div class="nome">
            <img src="/img/p (1).png" alt=""/>
        </div>

            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <div className="con">
                <img src="./img/cadeira.jfif" alt="" />
                <img src="./img/cadeira.jfif" alt="" />
            </div>
            <FlashDeals productItems={productItems} addToCart={addToCart} />

            <div className='texto-cabecalho'>
                <div>


                    <div class="img">
                        <img src="./img/pp.png" height="322px" alt="" />
                    </div>

                    <div class="tt">
                        <h1>Departamento</h1>
                    </div>


                    <div class="os">

                        <div class="lk">
                            <h1>Gamer </h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Telefones</h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>Casa inteligente</h1>
                            <img src="./img/g.png" alt="" />


                        </div>
                    </div>



                    <div class="os">
                        <div class="lk">
                            <h1>Gamer </h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Telefones</h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>Casa inteligente</h1>
                            <img src="./img/g.png" alt="" />


                        </div>
                    </div>

                    <div class="os">
                        <div class="lk">
                            <h1>Gamer </h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk">
                            <h1>Telefones</h1>
                            <img src="./img/g.png" alt="" />


                        </div>

                        <div class="lk" >
                            <h1>Casa inteligente</h1>
                            <img src="./img/g.png" alt="" />


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

export default Index