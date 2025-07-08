import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WishlistPage from './pages/WishlistPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Error404Page from './pages/Error404Page';
import CategoryPage from './pages/CategoryPage';
import './styles/index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/orders" element={<AccountPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
} 

export default App;

