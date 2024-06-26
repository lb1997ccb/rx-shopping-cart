import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import CartItem from './cart-item';
import './cart.css';

/**
 * Cart component displays the items in the shopping cart and calculates the total price.
 * @returns {JSX.Element} JSX for Cart component
 */
const Cart = () => {
    const { cart } = useContext(CartContext);

    // Calculate total price of items in the cart
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Render the cart component
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
