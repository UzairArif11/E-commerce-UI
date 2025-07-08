import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Contact</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              {/* Call To Us */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">Call To Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
                  <p className="text-sm font-medium">Phone: +8801611112222</p>
                </div>
              </div>

              <hr className="my-8" />

              {/* Write To Us */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.226a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">Write To US</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-sm font-medium">Emails: customer@exclusive.com</p>
                  <p className="text-sm font-medium">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <textarea
                  name="message"
                  rows="8"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
