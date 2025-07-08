import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Layout;
