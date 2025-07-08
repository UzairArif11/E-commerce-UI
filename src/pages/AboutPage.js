import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../config/images';

function AboutPage() {
  const stats = [
    { number: '10.5k', label: 'Sellers active our site' },
    { number: '33k', label: 'Monthly Product Sale' },
    { number: '45.5k', label: 'Customer active in our site' },
    { number: '25k', label: 'Annual gross sale in our site' }
  ];

  const services = [
    {
      icon: '🚚',
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      icon: '🎧',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: '✅',
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  const team = [
    {
      name: 'Tom Cruise',
      position: 'Founder & Chairman',
      image: '/assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.jpg',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emma Watson',
      position: 'Managing Director',
      image: '/assets/images/attractive-woman-wearing-hat-posing-black-background 1.jpg',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Will Smith',
      position: 'Product Designer',
      image: '/assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.jpg',
      social: {
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">About</span>
        </nav>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">Our Story</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
          <div>
            <img
              src={heroImages.shoppingWomen}
              alt="Shopping women"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white group transition-colors">
              <div className="w-16 h-16 bg-black group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white group-hover:bg-black rounded-full"></div>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 p-8 rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.position}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.twitter} className="text-gray-600 hover:text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href={member.social.instagram} className="text-gray-600 hover:text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg">{service.icon}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
