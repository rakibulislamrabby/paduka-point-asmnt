import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])
    return (
        <div className='container'>
            <h1 className=' mt-3'>Welcome in our site</h1>
            <h5 className='mb-5 '>Buy Your Favourite <b className='text-danger'>Shoes</b></h5>
            <div className='row'>
                <div className='col-lg-8 float-left '>
                    <div className='row '>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className='col-lg-4 sticky-top fixed-top float-right'>
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;