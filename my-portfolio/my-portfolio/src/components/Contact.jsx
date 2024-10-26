import React, { useState } from "react";
import { FaRegAddressBook, FaRegEnvelope, FaRegMap } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section
      className="bg-gradient-to-br from-blue-700 to-indigo-800 py-16 px-4 relative"
      id="contact"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-extrabold text-center text-white mb-6">
          Contact Me
        </h2>
        <p className="text-center text-white text-lg mb-12">
          Let's <span className="font-semibold">Connect and Collaborate</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <FaRegMap className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Sultanpur, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <FaRegEnvelope className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">bt22ec036@nitmz.ac.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <FaRegAddressBook className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">7307675982</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={form.subject}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                value={form.message}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
