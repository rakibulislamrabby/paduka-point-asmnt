import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const { name, photo } = props.item;
    return (
        <div className='cart-item'>

            <h5>Name: {name}</h5>
        </div>
    );
};

export default Cart;