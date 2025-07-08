import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts, categories, featuredProducts } from '../data/sampleData';
import { heroImages, brandImages, productImages } from '../config/images';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Exact Figma Design */}
      <section className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 text-sm font-medium">🍎</span>
                  <span className="text-white text-sm">iPhone 14 Series</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight">
                  Up to 10%
                  <br />
                  off Voucher
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  to="/products"
                  className="text-white border-b border-white hover:text-gray-300 transition-colors"
                >
                  Shop Now
                </Link>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <img
                src={productImages.iPhone}
                alt="iPhone 14"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Figma Design */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
            <h2 className="text-red-500 font-semibold">Categories</h2>
          </div>
          <h3 className="text-4xl font-bold mb-8">Browse By Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 mx-auto mb-4 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
            <h2 className="text-red-500 font-semibold">Today's</h2>
          </div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-4xl font-bold">Flash Sales</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-center">
                  <div className="text-xs text-gray-600">Days</div>
                  <div className="text-2xl font-bold">03</div>
                </div>
                <span className="text-red-500 text-xl">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600">Hours</div>
                  <div className="text-2xl font-bold">23</div>
                </div>
                <span className="text-red-500 text-xl">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600">Minutes</div>
                  <div className="text-2xl font-bold">19</div>
                </div>
                <span className="text-red-500 text-xl">:</span>
                <div className="text-center">
                  <div className="text-xs text-gray-600">Seconds</div>
                  <div className="text-2xl font-bold">56</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
            <h2 className="text-red-500 font-semibold">This Month</h2>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-4xl font-bold">Best Selling Products</h3>
            <Link
              to="/products"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
          <p className="text-xl mb-8">Get up to 50% off on selected items. Limited time offer!</p>
          <Link
            to="/products"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Shop Sale Items
          </Link>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Download Our App</h2>
              <p className="text-gray-300">
                Get the best shopping experience on your mobile device. Download our app now and enjoy exclusive mobile-only deals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="inline-block">
                  <img
                    src={brandImages.appStore}
                    alt="Download on App Store"
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src={brandImages.googlePlay}
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src={heroImages.hero1}
                alt="Mobile App"
                className="mx-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and never miss out on the latest deals and new arrivals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-3 rounded-r-lg hover:bg-primary-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
