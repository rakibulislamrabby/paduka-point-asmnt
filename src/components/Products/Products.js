import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';

const Products = () => {
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setproducts(data));
    }, []);
    // const addToCart = (product) => {
    //     const newCart = [...carts, products]
    //     setcart(newCart);
    // }
    const addToCart = (product) => {
        let searchedProduct = cart.find(search => search.id === product.id);
        if (searchedProduct) {
            alert("You are already add This Item!!")
        }
        else {
            if (cart.length < 4) {
                setcart([...cart, product]);
            }
            else {
                alert("You can nor added more then 4 items")
            }
        }

    }

    return (
        <div className='container'>
            <h1 className=' mt-3'>Welcome in our site</h1>
            <h5 className='mb-5 '>Buy Your Favourite <b className='text-danger'>Shoes</b></h5>
            <div className='row'>
                <div className='col-lg-9 float-left '>
                    <div className='row '>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}

                            ></Product>)
                        }
                    </div>
                </div>
                <div className='col-lg-3 border border-danger sm-1'>
                    <div className='bg-grey  h-100 '>
                        <h1 className='mb-3'>Cart History</h1>
                        {
                            cart.map(item =>

                                <Cart key={item.id} item={item}></Cart>)
                        }

                        <button className='btn btn-outline-danger m-2'>Choose 1 for Me</button> <br />
                        <button className='btn btn-outline-danger mx-'>Choose Again</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;