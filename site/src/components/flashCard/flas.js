import React from "react"
import FlashCard from "./index"
import "./flas.scss"

const FlashDeals = () => {
  return (
    <>
      <section className='flassh'>
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