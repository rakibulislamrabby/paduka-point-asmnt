import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        { id: 1, name: "nikee", price: 200, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
        { id: 2, name: "Bata", price: 800, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
        { id: 3, name: "Kata", price: 500, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
        { id: 4, name: "Fata", price: 400, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
    ]
    return (
        <div className='container'>
            <h1 className='mb-5 mt-3'>Welcome in our site</h1>
            <div className='row'>
                <div className='col-lg-8 float-left g-3'>
                    <div className='row '>

                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className='col-lg-4 float-left'>
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;