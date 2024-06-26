import React from 'react';
import shopProducts from '../../data/shop-products';
import ShopProduct from './shop-product';
import './shop-product-list.css';

/**
 * ShopProductList component renders a list of shop products using ShopProduct component.
 * @returns {JSX.Element} JSX for ShopProductList component
 */
const ShopProductList = () => {
    // Render the shop product list component
    return (
        <div className="shop-product-list">
            {shopProducts.map((product) => (
                <ShopProduct key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ShopProductList;
