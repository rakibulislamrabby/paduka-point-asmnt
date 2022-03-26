import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import QuestionAns from '../QuestionAnswer/QuestionAns';

const Products = () => {
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setproducts(data));
    }, []);
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

    const chooseOne = (selectedCarts) => {
        const totalCartItems = selectedCarts.length;
        if (totalCartItems < 2) {
            alert("Please add minimum 2 items to choose 1 randomly")
        }
        else {
            const index = Math.floor(Math.random() * totalCartItems);
            const luckyCart = selectedCarts[index]
            setcart([luckyCart]);
        }
    }
    const chooseAgain = () => {
        setcart([]);
    }

    return (
        <div className='container main-div '>
            <div className='bg-light'>
                <h1 className=' mt-3'><b className='text-danger'>Paduka</b> Point</h1>
                <h5 className='mb-5 pb-3'>Buy Your Favourite <b className='text-danger'>Shoes</b></h5>
            </div>
            <div className='row'>

                <div className='col-lg-3 border border-danger mb-5'>
                    <div className=''>
                        <Cart carts={cart} chooseAgain={chooseAgain} chooseOne={chooseOne}></Cart>
                    </div>
                </div>

                <div className='col-lg-9 '>
                    <div className='row '>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            ></Product>)
                        }
                    </div>
                    <QuestionAns></QuestionAns>
                </div>
            </div>

        </div>
    );
};

export default Products;