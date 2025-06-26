// src/components/ContactPage.js
import React from "react";
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaPaperclip,} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0">
          <img
            src=""
            alt="Contact us background"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="absolute inset-0 bg-[#E8EFFA]  flex items-center justify-center rounded-xl">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              CONTACT
            </h1>
            <p className="text-xl text-blck font-semibold max-w-2xl mx-auto">
              HOME/CONTACT
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Help & Support */}
          <div className="lg:w-2/5">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-blue-900">Help</span>
                <span className="text-yellow-500"> & Support</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our team is here to assist you with any questions or concerns
                you may have. Feel free to reach out through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 rounded-full p-3">
                  <FaMapMarkerAlt className="text-blue-700 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Office Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    123 Innovation Drive
                    <br />
                    Tech Park, Suite 405
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 rounded-full p-3">
                  <FaPhoneAlt className="text-blue-700 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    Main: (555) 123-4567
                    <br />
                    Support: (555) 765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 rounded-full p-3">
                  <FaEnvelope className="text-blue-700 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    info@company.com
                    <br />
                    support@company.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Support Request</option>
                    <option>Billing Question</option>
                    <option>Partnership Opportunity</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    <FaPaperclip className="mr-2" />
                    Attach File or Receipt
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#E8EFFA] text-black font-semibold rounded-lg hover:bg-sky-200 transition-colors shadow-md"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 overflow-hidden">
            <iframe
              src=""
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location Map"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-medium text-gray-700">
              123 Innovation Drive, San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
