import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './shop-product.css';

/**
 * ShopProduct component renders a product with its image, name, price, and an 'Add to Cart' button.
 * @param {Object} props - Component props
 * @param {Object} props.product - Product object containing details like name, image, and price
 * @returns {JSX.Element} JSX for ShopProduct component
 */
const ShopProduct = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    /**
     * Handles click event to add the product to the cart.
     * Calls addToCart function from CartContext with the product object.
     */
    const handleAddToCart = () => {
        addToCart(product);
    };

    // Render the shop product component
    return (
        <div className="shop-product">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ShopProduct;
