import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './cart-item.css';

/**
 * CartItem component renders an item in the shopping cart.
 * Allows the user to view item details, adjust quantity, and remove the item.
 * @param {Object} props - Component props
 * @param {Object} props.item - Item object containing name, image, price, and quantity
 * @returns {JSX.Element} JSX for CartItem component
 */
const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    /**
     * Handles click event to remove the item from the cart.
     * Calls removeFromCart function from CartContext with item ID.
     */
    const handleRemoveClick = () => {
        removeFromCart(item.id);
    };

    // Render the cart item component
    return (
        <div className="cart-item">
            <img src={`/images/${item.image}`} alt={item.name} />
            <div>
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={handleRemoveClick}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
