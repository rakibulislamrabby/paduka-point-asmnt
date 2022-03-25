import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Product = (props) => {
    const { name, price, photo } = props.product;
    return (
        <div className='col-lg-4 float-left mb-5'>
            <div className="card h-100">
                <img src={photo} className="card-img-top h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <button className='btn btn-danger'>
                        Add To Cart
                        <FontAwesomeIcon className='ms-2' icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Product;