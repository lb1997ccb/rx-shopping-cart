import React, { createContext, useState } from 'react';

// Create a context object for CartContext
export const CartContext = createContext();

/**
 * CartProvider component provides state management for shopping cart and notifications.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components wrapped by CartProvider
 * @returns {JSX.Element} JSX for CartProvider component
 */
export const CartProvider = ({ children }) => {
    // State to manage the shopping cart items
    const [cart, setCart] = useState([]);

    // State to manage notifications shown to the user
    const [notification, setNotification] = useState(null);

    /**
     * Adds a product to the shopping cart.
     * Updates cart state and sets a notification for the added product.
     * @param {Object} product - Product object to be added to the cart
     */
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setNotification(`Added ${product.name} - $${product.price.toFixed(2)} to the cart`);
    };

    /**
     * Clears the notification.
     * Sets notification state to null.
     */
    const clearNotification = () => {
        setNotification(null);
    };

    // Render the CartContext Provider with cart and notification state values
    return (
        <CartContext.Provider value={{ cart, addToCart, notification, clearNotification }}>
            {children}
        </CartContext.Provider>
    );
};
