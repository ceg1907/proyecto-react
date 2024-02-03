import { CiShoppingBasket } from "react-icons/ci";
import React from 'react'
import './CartWidget.css'

export function CartWidget() {
  return (
      <div className= 'cart-box'>
          <button>
              <CiShoppingBasket size={'1.5rem'}/>
              <span>carrito</span>
          </button>
    </div>
  )
}
