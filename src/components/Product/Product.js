import React from 'react';

const Product = (props) => {
    const { name, price, photo } = props.product;
    return (
        <div className='col-lg-4 float-left mb-5'>
            <div className="card h-100">
                <img src={photo} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <p className="card-text">Price:${price}</p>
                    <button className='btn btn-primary'>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;