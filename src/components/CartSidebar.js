import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCart, removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice, isOpen } = useSelector((state) => state.cart);

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => dispatch(closeCart())}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart ({totalItems})</h2>
            <button
              onClick={() => dispatch(closeCart())}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <svg className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h0a1 1 0 001 1h11M9 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-gray-500">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={() => dispatch(closeCart())}
                  className="inline-block mt-4 text-primary-600 hover:text-primary-700"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.image || '/api/placeholder/60/60'}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-primary-600 font-semibold">${item.price}</p>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="mx-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="p-1 text-red-500 hover:bg-red-50 rounded"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Link
                  to="/cart"
                  onClick={() => dispatch(closeCart())}
                  className="block w-full bg-gray-200 text-gray-800 text-center py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => dispatch(closeCart())}
                  className="block w-full bg-primary-600 text-white text-center py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
