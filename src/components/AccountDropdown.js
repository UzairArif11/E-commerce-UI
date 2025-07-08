import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  StarIcon, 
  ArrowRightOnRectangleIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const AccountDropdown = ({ isAuthenticated = false, userName = 'User' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      icon: UserIcon,
      label: 'Manage My Account',
      href: '/account',
      color: 'text-gray-700'
    },
    {
      icon: ShoppingBagIcon,
      label: 'My Orders',
      href: '/orders',
      color: 'text-gray-700'
    },
    {
      icon: HeartIcon,
      label: 'My Wishlist',
      href: '/wishlist',
      color: 'text-gray-700'
    },
    {
      icon: StarIcon,
      label: 'My Reviews',
      href: '/reviews',
      color: 'text-gray-700'
    },
    {
      icon: ArrowRightOnRectangleIcon,
      label: 'Logout',
      href: '/logout',
      color: 'text-red-600'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <Link
          to="/login"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Login
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          to="/signup"
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
      >
        <UserIcon className="h-5 w-5" />
        <span>{userName}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${item.color}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
