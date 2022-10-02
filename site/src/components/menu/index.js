import React,{useState} from 'react'
import {IoMdBookmark, IoMdCall, IoMdChatboxes, IoMdClipboard, IoMdClose, IoMdHammer, IoMdHome, IoMdImage, IoMdMenu, IoMdPerson} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './index.scss'

const Header = () => {

    const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

                    {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                <li>
                    <IoMdImage className='icon'/>
                    <Link to='/'></Link>
                </li>


                <li>
                    <IoMdBookmark className='icon'/>
                    <Link to='/'></Link>
                </li>


                <li>
                    <IoMdPerson className='icon'/>
                    <Link to='/'></Link>
                </li>


                <li>
                    <IoMdHome className='icon'/>
                    <Link to='/'></Link>
                </li>


                


                <li>
                    <IoMdHammer className='icon'/>
                    <Link to='/'></Link>
                </li>



               


                <li>
                    <IoMdClipboard className='icon'/>
                    <Link to='/'></Link>
                </li>

            </ul>
        </nav>

    </div>
  )
}

export default Header