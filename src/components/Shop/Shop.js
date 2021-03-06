import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    //data load

    const [products, setProducts] = useState([]);

    //for cart
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    //

    //event handler
    const handleAddToCart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    //

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product =>
                        <Product

                            key={product.id}

                            product={product}

                            handleAddToCart={handleAddToCart}>

                        </Product>)
                }
            </div>

            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;