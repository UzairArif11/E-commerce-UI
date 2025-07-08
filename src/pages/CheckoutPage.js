import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const { items } = useSelector((state) => state.cart);
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleInputChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value
    });
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Account</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-gray-700">My Account</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-gray-700">Product</Link>
          <span className="mx-2">/</span>
          <Link to="/cart" className="hover:text-gray-700">View Cart</Link>
          <span className="mx-2">/</span>
          <span className="text-black">CheckOut</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Billing Form */}
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.firstName}
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address*
              </label>
              <input
                type="text"
                name="streetAddress"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.streetAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartment"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.apartment}
                onChange={handleInputChange}
              />
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Town/City*
              </label>
              <input
                type="text"
                name="city"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.city}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={billingDetails.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
              />
              <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            {/* Product List */}
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
            </div>

            {/* Order Totals */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-medium text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="bank" className="ml-2 text-sm text-gray-900">
                  Bank
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="cash" className="ml-2 text-sm text-gray-900">
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mt-8">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
