import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AccountPage() {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    // Handle saving profile changes
    console.log('Saving changes:', profileData);
  };

  const sidebarItems = [
    { id: 'profile', label: 'Manage My Account', icon: '👤' },
    { id: 'address', label: 'My Profile', icon: '📍', isSubItem: true },
    { id: 'payment', label: 'Address Book', icon: '💳', isSubItem: true },
    { id: 'orders', label: 'My Orders', icon: '📦' },
    { id: 'returns', label: 'My Returns', icon: '↩️', isSubItem: true },
    { id: 'cancellations', label: 'My Cancellations', icon: '❌', isSubItem: true },
    { id: 'wishlist', label: 'My WishList', icon: '❤️' }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">My Account</span>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Welcome! {user?.name || 'User'}</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    activeTab === item.id
                      ? 'bg-red-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${item.isSubItem ? 'pl-8 text-sm' : ''}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-xl font-medium mb-6 text-red-500">Edit Your Profile</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={profileData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={profileData.address}
                        onChange={handleInputChange}
                        placeholder="Kingston, 5236, United State"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password Changes</h3>
                    <input
                      type="password"
                      name="currentPassword"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Current Password"
                      value={profileData.currentPassword}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      name="newPassword"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="New Password"
                      value={profileData.newPassword}
                      onChange={handleInputChange}
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Confirm New Password"
                      value={profileData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-3 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveChanges}
                      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-xl font-medium mb-6">My Orders</h2>
                <div className="text-center py-16">
                  <div className="mb-4">
                    <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-500">No orders found</p>
                  <Link to="/products" className="inline-block mt-4 text-red-500 hover:text-red-600">Start Shopping</Link>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-xl font-medium mb-6">My Wishlist</h2>
                <div className="text-center py-16">
                  <div className="mb-4">
                    <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Your wishlist is empty</p>
                  <Link to="/wishlist" className="inline-block mt-4 text-red-500 hover:text-red-600">Go to Wishlist</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
