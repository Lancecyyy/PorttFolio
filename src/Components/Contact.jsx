import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-8">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="mt-6 max-w-lg w-full flex flex-col items-center">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-center"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border border-gray-300 rounded w-full mb-4 text-center"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
