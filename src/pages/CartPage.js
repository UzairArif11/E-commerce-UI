import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../store/slices/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Cart</span>
        </nav>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started</p>
            <Link 
              to="/products" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-white border-b text-sm font-medium">
                <div>Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-4 gap-4 p-4 border-b items-center">
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 text-sm hover:text-red-700 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-l border-r">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-center font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/products"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Return To Shop
              </Link>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Update Cart
              </button>
            </div>

            {/* Cart Totals and Coupon */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Coupon Code */}
              <div>
                <h3 className="text-lg font-medium mb-4">Coupon Code</h3>
                <div className="flex space-x-4">
                  <input 
                    type="text" 
                    placeholder="Coupon Code"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* Cart Total */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-6">Cart Total</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link 
                    to="/checkout"
                    className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-3 rounded-md font-medium transition-colors mt-6"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
