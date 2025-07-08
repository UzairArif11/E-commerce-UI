import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import { sampleProducts } from '../data/sampleData';
import ProductCard from '../components/ProductCard';

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Red');
  
  const product = sampleProducts.find(p => p.id === parseInt(id, 10));
  
  // Get related products
  const relatedProducts = sampleProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const productImages = [
    product?.image,
    product?.image,
    product?.image,
    product?.image
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Red', 'Blue', 'Black', 'White'];

  if (!product) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Product not found</h2>
            <Link to="/products" className="text-red-500 hover:text-red-600">Back to Products</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ 
      product: { ...product, selectedSize, selectedColor }, 
      quantity 
    }));
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Account</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-gray-700">Gaming</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-100 rounded-lg p-4 ${
                    selectedImage === index ? 'ring-2 ring-red-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0)
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
                <span className="text-sm text-gray-600 ml-2">({product.reviewCount || 0} Reviews)</span>
                <span className="text-green-500 text-sm ml-4">In Stock</span>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-black mb-6">${product.price}</div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
            </div>

            <hr className="my-6" />

            {/* Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3">Colours:</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'red' ? '#ef4444' : 
                                     color.toLowerCase() === 'blue' ? '#3b82f6' : 
                                     color.toLowerCase() === 'black' ? '#000000' : '#ffffff'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-medium mb-3">Size:</h3>
              <div className="flex space-x-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-l border-r">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Add To Cart
              </button>
              
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m0 0V7a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8a1 1 0 011-1h2m6 0H9" />
                </svg>
                <div>
                  <div className="font-medium">Free Delivery</div>
                  <div className="text-sm text-gray-600">Enter your postal code for Delivery Availability</div>
                </div>
              </div>
              
              <hr />
              
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <div>
                  <div className="font-medium">Return Delivery</div>
                  <div className="text-sm text-gray-600">Free 30 Days Delivery Returns. Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t pt-16">
          <div className="flex items-center mb-8">
            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
            <h2 className="text-2xl font-medium">Related Item</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
