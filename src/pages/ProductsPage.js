import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts, categories } from '../data/sampleData';
import { setFilters, clearFilters } from '../store/slices/productSlice';

function ProductsPage() {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...sampleProducts];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

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
      case 'newest':
        // Sort by ID (assuming higher ID = newer)
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setSortBy('name');
    dispatch(clearFilters());
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Products</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button 
                  onClick={handleClearFilters}
                  className="text-red-500 text-sm hover:text-red-600"
                >
                  Clear All
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    All Categories
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.slug}
                        checked={selectedCategory === category.slug}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 px-2 py-1 border rounded text-sm"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                      className="w-20 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Featured Brands */}
              <div>
                <h4 className="font-medium mb-3">Featured Brands</h4>
                <div className="space-y-2">
                  {['Apple', 'Samsung', 'JBL', 'Canon', 'Gucci'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">All Products</h1>
                <p className="text-gray-600">Showing {filteredProducts.length} products</p>
              </div>
              
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* View Toggle */}
                <div className="flex border border-gray-300 rounded">
                  <button className="p-2 bg-gray-100">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="p-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria.</p>
                <button 
                  onClick={handleClearFilters}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-red-500 text-white rounded">1</button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
