import React,{useState} from 'react'
import {IoIosHome, IoMdCall, IoMdChatboxes, IoMdClipboard, IoIosHeart, IoMdHammer, IoMdBookmark, IoIosCart, IoMdMenu, IoMdPerson} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './index.scss'

const Header = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

             

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                <li>
                
                <IoIosHome className='icon'/>
                <Link to='/usuario1'></Link>
                </li>


                <li>
                <IoMdPerson className='icon'/>
                    <Link to='/usuario2'>History</Link>
                </li>


                <li>
                    <IoIosHeart className='icon'/>
                    <Link to='/'>Testimonials</Link>
                </li>


                <li>
                    <IoIosCart className='icon'/>
                    <Link to='/'>Partners</Link>
                </li>


                <li>
                    <IoMdBookmark className='icon'/>
                    <Link to='/'>About</Link>
                </li>


               

            </ul>
        </nav>

    </div>
  )
}

export default Header