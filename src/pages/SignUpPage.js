import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../config/images';

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Create an account
            </h2>
            <p className="text-gray-600 mb-8">
              Enter your details below
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                type="text"
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Already have account?{' '}
              <Link to="/login" className="text-black hover:underline font-medium">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-blue-50">
        <div className="h-full flex items-center justify-center p-12">
          <img
            src={heroImages.shoppingWomen}
            alt="Shopping cart and mobile phone"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
