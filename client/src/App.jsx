import React from 'react';
import Home from './pages/Home';
import ProductPage from './pages/Product';
import ProductList from "./pages/ProductList";
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart'; 
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        
        {}
        <Route path="/cart" element={<Cart />} /> {}
      </Routes>
    </Router>
  );
};

export default App;