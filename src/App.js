import { CartProvider, CartContext  } from './context/cart-context';
import ShopProductList from './components/shop-product/shop-product-list';
import Notification from "./components/notification/notification";
import Cart from './components/cart/cart';
import { useContext } from 'react';
import './App.css';

function App() {
    return (
        <CartProvider>
            <div className="app">
                <h1>React Shopping Cart</h1>
                <ShopProductList />
                <Cart />
                <NotificationWrapper />
            </div>
        </CartProvider>
    );
}

function NotificationWrapper() {
    const { notification, clearNotification } = useContext(CartContext);

    if (!notification) return null;

    return <Notification message={notification} onClose={clearNotification} />;
}

export default App;
