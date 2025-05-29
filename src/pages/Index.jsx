
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import AdminPanel from '../components/AdminPanel';
import { CartProvider } from '../context/CartContext';
import { ProductProvider } from '../context/ProductContext';

const Index = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <Header />
          <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </ProductProvider>
    </CartProvider>
  );
};

export default Index;
