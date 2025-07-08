import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  SpeakerWaveIcon,
  ClockIcon,
  ShoppingBagIcon,
  HomeIcon,
  HeartIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const CategoryDropdown = () => {
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

  const categories = [
    {
      icon: DevicePhoneMobileIcon,
      label: 'Phones & Tablets',
      href: '/products?category=phones',
      subcategories: ['Smartphones', 'Tablets', 'Accessories']
    },
    {
      icon: ComputerDesktopIcon,
      label: 'Electronics',
      href: '/products?category=electronics',
      subcategories: ['Computers', 'Laptops', 'Gaming']
    },
    {
      icon: CameraIcon,
      label: 'Camera & Photo',
      href: '/products?category=camera',
      subcategories: ['Digital Cameras', 'Lenses', 'Tripods']
    },
    {
      icon: SpeakerWaveIcon,
      label: 'Audio & Headphones',
      href: '/products?category=audio',
      subcategories: ['Headphones', 'Speakers', 'Microphones']
    },
    {
      icon: ClockIcon,
      label: 'Watches & Jewelry',
      href: '/products?category=watches',
      subcategories: ['Smart Watches', 'Jewelry', 'Accessories']
    },
    {
      icon: ShoppingBagIcon,
      label: 'Fashion & Clothing',
      href: '/products?category=fashion',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes']
    },
    {
      icon: HomeIcon,
      label: 'Home & Garden',
      href: '/products?category=home',
      subcategories: ['Furniture', 'Kitchen', 'Garden']
    },
    {
      icon: HeartIcon,
      label: 'Health & Beauty',
      href: '/products?category=health',
      subcategories: ['Skincare', 'Makeup', 'Fitness']
    },
    {
      icon: GiftIcon,
      label: 'Toys & Games',
      href: '/products?category=toys',
      subcategories: ['Board Games', 'Action Figures', 'Educational']
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium py-2"
      >
        <span>Categories</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <Link
                  to={category.href}
                  className="flex items-center px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <category.icon className="h-5 w-5 mr-3 text-gray-500" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{category.label}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {category.subcategories.slice(0, 2).join(', ')}
                      {category.subcategories.length > 2 && '...'}
                    </div>
                  </div>
                  <ChevronDownIcon className="h-4 w-4 text-gray-400 transform -rotate-90" />
                </Link>
                
                {/* Subcategory hover menu */}
                <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ml-1">
                  <div className="py-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`${category.href}&subcategory=${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Categories Link */}
          <div className="border-t border-gray-200 px-4 py-3">
            <Link
              to="/products"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              onClick={() => setIsOpen(false)}
            >
              View All Categories →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
