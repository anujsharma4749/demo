// src/components/PrivacyPolicy.js
import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Gilroy:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E8EFFA] font-sans">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-blue-200 w-full h-full opacity-30"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' ...\")"
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in-down" style={{ fontFamily: 'Gilroy, sans-serif' }}>
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-gray-600 animate-fade-in-up">
            Learn how AutoVerse collects, uses, and protects your data when shopping for car parts and accessories.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-24">
          <div className="md:w-1/2 animate-fade-in-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              What Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              When you purchase auto parts or accessories, we collect your contact and payment details to ensure smooth transactions.
            </p>
            <p className="text-gray-700">
              This may include your name, email, shipping address, vehicle details, and browsing preferences on our site.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1dG9tb3RpdmV8ZW58MHx8MHx8fDA%3D" 
              alt="Information Collection" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center mb-24">
          <div className="md:w-1/2 animate-fade-in-right">
            <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              How We Use Your Data
            </h2>
            <p className="text-gray-700 mb-4">
              Your data helps us personalize your experience, process your orders, and notify you about vehicle compatibility updates and special promotions.
            </p>
            <p className="text-gray-700">
              We also use browsing behavior to improve our site and product offerings.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Usage of Data" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-24">
          <div className="md:w-1/2 animate-fade-in-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              Securing Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We ensure your data is protected with SSL encryption and follow industry best practices in data handling and storage.
            </p>
            <p className="text-gray-700">
              Your payment data is securely transmitted and not stored on our servers.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Data Security" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center mb-24">
          <div className="md:w-1/2 animate-fade-in-right">
            <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              Cookies and Vehicle Preferences
            </h2>
            <p className="text-gray-700 mb-4">
              We use cookies to remember your vehicle selection, shopping cart, and browsing preferences to provide a tailored shopping experience.
            </p>
            <p className="text-gray-700">
              You can adjust cookie settings in your browser at any time.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1170&q=80" 
              alt="Cookies and Preferences" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 py-8 border-t border-gray-200 mt-8 animate-fade-in">
          <p>Last Updated: June 26, 2025</p>
          <p className="mt-2">© 2025 AutoVerse. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
 