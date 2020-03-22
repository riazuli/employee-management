import React from 'react';
import './Cart.css';

const Cart = (props) => {

  const cart = props.cart;
  let total = 0;
  for(let i= 0; i<cart.length; i++){
    const product =  cart[i];
    total = total + product.salary;
  }
  return (
    <div className="cart-area">
      <p>Number of person got paid: <b>{cart.length}</b></p>
      <p>Total salary paid: <b>{total}</b> </p>
    </div>
  );
};

export default Cart;