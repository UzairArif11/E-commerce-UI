import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts, categories } from '../data/sampleData';

function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  
  const categoryInfo = categories.find(c => c.slug === category);
  
  useEffect(() => {
    let filtered = sampleProducts.filter(product => product.category === category);
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setCategoryProducts(filtered);
  }, [category, sortBy]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Category not found</h2>
            <Link to="/" className="text-red-500 hover:text-red-600">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black capitalize">{categoryInfo.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
            <h1 className="text-3xl font-bold capitalize">{categoryInfo.name}</h1>
          </div>
          <p className="text-gray-600">{categoryInfo.description}</p>
        </div>

        {/* Sort and Filter Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600">Showing {categoryProducts.length} products</p>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">No products available in this category yet.</p>
            <Link 
              to="/products"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* View More Button */}
        {categoryProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              View More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
