import React from 'react';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">404 Error</span>
        </nav>

        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="mb-12">
            <h1 className="text-8xl lg:text-9xl font-bold text-black mb-8">404 Not Found</h1>
            <p className="text-lg text-gray-600 mb-12">
              Your visited page not found. You may go home page.
            </p>
          </div>
          
          <Link 
            to="/" 
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-md font-medium transition-colors"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
