import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);


  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="tittle"> Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' className='input' />
          <input type="text" placeholder='Last Name' className='input' />
        </div>
        <input type="email" placeholder='Email' className='input' />
        <input type="text" placeholder='Street ' className='input' />
        <div className="multi-fields">
          <input type="text" placeholder='City' className='input' />
          <input type="text" placeholder='Province' className='input' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' className='input' />
          <input type="text" placeholder='Country' className='input' />
        </div>
        <input type="text" placeholder='Phone Number' className='input' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>

  )
}

export default PlaceOrder
