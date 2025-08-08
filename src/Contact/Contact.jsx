import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-amber-100 rounded-3xl p-10 shadow-xl flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-yellow-900 mb-4 tracking-tight">Get in touch</h1>
          <p className="text-lg text-amber-900 mb-10">
            We&apos;d love to hear from you. Fill out the form to start a conversation!
          </p>
          <div className="space-y-6">
            <ContactDetail
              icon={
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              text="Delhi, IN, 110011"
            />
            <ContactDetail
              icon={
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              text="+91 9876543210"
            />
            <ContactDetail
              icon={
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              text="coffee-fresh@email.com"
            />
          </div>
        </div>
        <form className="bg-white p-10 rounded-3xl shadow-xl space-y-6 flex flex-col justify-center">
          <InputField id="name" type="text" placeholder="Full Name" />
          <InputField id="email" type="email" placeholder="Email" />
          <InputField id="tel" type="tel" placeholder="Phone Number" />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md shadow transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactDetail({ icon, text }) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <span className="text-lg text-yellow-900 font-semibold">{text}</span>
    </div>
  );
}

function InputField({ id, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-amber-200 rounded-md text-gray-800 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-amber-50"
        autoComplete="off"
      />
    </div>
  );
}
