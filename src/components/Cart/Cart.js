import React from 'react';
import "./Cart.css"
const Cart = () => {
    return (
        <div style={{ position: "sticky", top: "0px" }} className='bg-grey  h-100 '>
            <h1 className='mb-3'>Cart History</h1>
            <button className='btn btn-outline-danger m-2'>Choose 1 for Me</button> <br />
            <button className='btn btn-outline-danger mx-'>Choose Again</button>

        </div>
    );
};

export default Cart;