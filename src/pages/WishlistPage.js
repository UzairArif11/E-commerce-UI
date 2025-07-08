import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/sampleData';

function WishlistPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);
  
  // Get "Just For You" products (excluding wishlist items)
  const justForYouProducts = sampleProducts.filter(
    product => !items.some(item => item.id === product.id)
  ).slice(0, 4);

  const handleMoveToCart = (item) => {
    dispatch(addToCart({ product: item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
  };

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Wishlist ({items.length})</h1>
          {items.length > 0 && (
            <button 
              onClick={() => {
                items.forEach(item => {
                  dispatch(addToCart({ product: item, quantity: 1 }));
                  dispatch(removeFromWishlist(item.id));
                });
              }}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Move All To Bag
            </button>
          )}
        </div>

        {/* Wishlist Items */}
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add products you like to your wishlist. Review them anytime and easily move them to the bag.</p>
            <Link 
              to="/products" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden group">
                {/* Product Image */}
                <div className="relative bg-gray-100 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain"
                  />
                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      -{item.discount}%
                    </span>
                  )}
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                  >
                    <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  
                  {/* Add to Cart Button - Shown on Hover */}
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add To Cart
                  </button>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 font-medium">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">${item.originalPrice}</span>
                    )}
                  </div>
                  {item.rating && (
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({item.reviewCount || 0})</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Just For You Section */}
        <div className="border-t pt-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
              <h2 className="text-2xl font-medium">Just For You</h2>
            </div>
            <Link
              to="/products"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              See All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {justForYouProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
