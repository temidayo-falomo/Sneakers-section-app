import React from 'react'
import './FilledDrop.css'
import { useState } from 'react';
import { sliderData } from '../sliderData';

function FilledDrop({price, setPrice, value, setValue}) {
     const [click, setClick] = useState(false);
     const [initialPrice, setInitialPrice] = useState(125.01);
     const [isCartItems, setIsCartItems] = useState(false);

    //  const handleRemove = () => {
    //    return (
    //      {classList.remove('box')}
    //    )
    //  }


  return (
    <div className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        <div className='box'>
            <h4>Cart</h4>
            <div className='underline'></div>
            <div className={isCartItems ? 'cart-items remove': 'cart-items'}>
              <img src='./images/image-product-1-thumbnail.jpg' alt='' className='item-img'/>
              <div className='cart-item'>
                 <p>Fall Limited Edition Sneakers</p>
                 <p>${initialPrice} x {value} <span>{price}</span></p>
              </div>
              <div className='delete' onClick={()=> setIsCartItems(!isCartItems)}>
                <img src='./images/icon-delete.svg' alt='' />
              </div>
            </div>
            <button className='checkout-btn'>Checkout</button>
        </div>
    </div>
  )
}

export default FilledDrop