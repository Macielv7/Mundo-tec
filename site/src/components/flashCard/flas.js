import React from "react"
import FlashCard from "./index"
import "./style.scss"

const FlashDeals = () => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Lançamentos</h1>
          </div>
          <FlashCard  />
        </div>
      </section>
    </>
  )
}

export default FlashDeals