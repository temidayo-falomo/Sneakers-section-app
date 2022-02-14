import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import FilledDrop from '../filledDrop/FilledDrop'

const Navbar = ({price, setPrice, value, setValue}) => {
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleDrop =()=> {
      setDropdown(!dropdown)
    } 

  return (
    <nav>
      <div className='nav-container'>
        <div className='mobile-container'>
           <div className='hamburger-logo'>
             <div className='top-left'>
                <div className='menu-item' onClick={handleClick}>
                  {click ? <RiCloseLine /> : <GiHamburgerMenu />}
                </div>
                <h2><img src='./images/logo.svg' alt=''/></h2>
              </div>
            <ul className={click ? 'menu-links active' : 'menu-links'}>
              <li><a href='/'>Collections</a></li>
              <li><a href='/'>Men</a></li>
              <li><a href='/'>Women</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
          </div>
  
          <div className='cart-avatar'>
            <div className='cart'>
             <AiOutlineShoppingCart className='cart-basket'/>
             <span>{value}</span>
           </div>
           <div onClick={handleDrop} className='avatar-drop'>
           <img src='./images/image-avatar.png' alt='' className='avatar'/>
           {dropdown && <FilledDrop price={price} setPrice={setPrice} value={value} setValue={setValue}/>}
           </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar