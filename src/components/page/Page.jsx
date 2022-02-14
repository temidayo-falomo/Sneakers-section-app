import React from 'react';
import './Page.css';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { sliderData } from '../sliderData';


function Page({slides, value, setValue, price, setPrice}) {
  const [toggleState, setToggleState] = useState(1);
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length-1 ? 0: current + 1)
  }

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0: current - 1);
    if (current<=0) {
      setCurrent(current+1)
    }
  }

  if(!Array.isArray(slides) || slides.length<= 0) {
    return null;
  }

  const handleClick1 = () => {
    // if (value===0) {
    //   setPrice(0);
    // }
    setValue(value + 1);
    setPrice(price*2);
  }

  const handleClick2 = () => {
    if (value<=0) {
      return 0;
    }
    setValue(value - 1);
    setPrice(price/2);
  }

  const toggleTab = (index) => {
    setToggleState(index);
}


  return (
    <div className='page'>
      <div className='page-container'>
        <div className='left-side'>
          <section className='slider'>
            {sliderData.map((slide, index)=> {
              return (
                <div className={index === current ? 'slide-active' : slide} key={index}>
                 {index === current && (<img src={slide.image} alt='' className='product-1 active-product'/>)}
                </div>
              )
            })}
          </section>


          <section className='slider-2'>
             <img src='./images/image-product-1.jpg' alt='' className={toggleState === 1 ? "product-1 active-product" : "product-1"} />
             <img src='./images/image-product-2.jpg' alt='' className={toggleState === 2 ? "product-1 active-product" : "product-1"} />
             <img src='./images/image-product-3.jpg' alt='' className={toggleState === 3 ? "product-1 active-product" : "product-1"} />
             <img src='./images/image-product-4.jpg' alt='' className={toggleState === 4 ? "product-1 active-product" : "product-1"} />
          </section>


          <div className='arrows'>
            <AiOutlineLeft className='arrow' onClick={prevSlide}/>
            <AiOutlineRight className='arrow' onClick={nextSlide}/>
          </div>


          <div className='thumbnails'>
            <img src='./images/image-product-1-thumbnail.jpg' alt='' className='product' onClick={() => toggleTab(1)}/>
            <img src='./images/image-product-2-thumbnail.jpg' alt='' className='product' onClick={() => toggleTab(2)}/>
            <img src='./images/image-product-3-thumbnail.jpg' alt='' className='product' onClick={() => toggleTab(3)}/>
            <img src='./images/image-product-4-thumbnail.jpg' alt='' className='product' onClick={() => toggleTab(4)}/>
          </div>
        </div>


        <div className='right-side'>
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low profile sneakers are your perfect casual wear companion. 
            Featuring a durable rubber outer sole, they'll withstand evrything the
            weather can offer.
          </p>
          <div className='price'>
            <h4>${price}</h4>
            <button>50%</button>
            <span>${price*2}</span>
          </div>

          <div className='counter'>
            <div>
            <button onClick={handleClick2} className='cnt cnt-1'>-</button>
            <button className='cnt cnt-2'>{value}</button>
            <button onClick={handleClick1} className='cnt cnt-3'>+</button>
            </div>
             <div><button className='cart-btn'><AiOutlineShoppingCart className='cart-button-page' />Add to cart</button></div>
          </div>
         </div>
     </div>
    </div>
  )
}

export default Page