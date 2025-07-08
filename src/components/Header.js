import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import AccountDropdown from './AccountDropdown';
import CategoryDropdown from './CategoryDropdown';
import { 
  MagnifyingGlassIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { items: wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/products" className="font-bold underline ml-2">ShopNow</Link>
          </p>
          <div className="flex items-center space-x-2">
            <span>English</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black">
            Exclusive
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-gray-700">Home</Link>
            <Link to="/contact" className="text-black hover:text-gray-700">Contact</Link>
            <Link to="/about" className="text-black hover:text-gray-700">About</Link>
            <Link to="/signup" className="text-black hover:text-gray-700">Sign Up</Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>

            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <Link to="/wishlist" className="relative text-black hover:text-gray-700">
                <HeartIcon className="h-6 w-6" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={() => dispatch(toggleCart())}
                className="relative text-black hover:text-gray-700"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Account Dropdown */}
              <AccountDropdown isAuthenticated={isLoggedIn} userName={user?.name} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block text-black hover:text-gray-700">Home</Link>
            <Link to="/contact" className="block text-black hover:text-gray-700">Contact</Link>
            <Link to="/about" className="block text-black hover:text-gray-700">About</Link>
            <Link to="/signup" className="block text-black hover:text-gray-700">Sign Up</Link>
            <div className="border-t pt-4">
              <CategoryDropdown />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
