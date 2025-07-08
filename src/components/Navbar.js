import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary-500 py-4">
      <div className="container flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Store</Link>
        <div>
          <Link to="/cart" className="text-white mx-2 nav-link">Cart</Link>
          {/* Additional navigation links */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
