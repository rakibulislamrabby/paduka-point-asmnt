import React from 'react';
import "./Cart.css"
const Cart = ({ carts, chooseAgain, chooseOne }) => {
    // const { name, photo } = item;
    return (
        <div className=''>
            <h1>Cart History</h1>
            {
                carts.map(cart => {
                    return (
                        <div key={cart.id}>
                            <h5>{cart.name}</h5>

                        </div>
                    )
                })
            }
            <div className='mb-5'>
                <button className='btn btn-outline-danger m-2' onClick={() => chooseOne(carts)} >Choose 1 for Me</button> <br />
                <button className='btn btn-outline-danger mx-' onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;