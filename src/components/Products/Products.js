import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        { id: 1, name: "Nikee", price: 200, photo: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
        { id: 2, name: "Sports Nikee", price: 800, photo: "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, name: "Boot", price: 500, photo: "https://images.pexels.com/photos/4313481/pexels-photo-4313481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, name: "Fata", price: 400, photo: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/4277508/pexels-photo-4277508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/5584504/pexels-photo-5584504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/8859002/pexels-photo-8859002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/6847398/pexels-photo-6847398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Nikee", price: 100, photo: "https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/4066968/pexels-photo-4066968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, name: "Jhata", price: 100, photo: "https://images.pexels.com/photos/6481918/pexels-photo-6481918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ]
    return (
        <div className='container'>
            <h1 className=' mt-3'>Welcome in our site</h1>
            <h5 className='mb-5 '>Buy Your Favourite <b className='text-primary'>Shoes</b></h5>
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
                <div className='col-lg-4 float-left sticky-top'>
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;