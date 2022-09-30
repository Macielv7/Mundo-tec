import React from "react"
import './index.scss'
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
