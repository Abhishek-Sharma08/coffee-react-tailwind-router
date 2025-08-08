import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-white pb-10">
      <header className="flex flex-col items-center justify-center pt-32 pb-12 relative z-10">
        <h1 className="text-center text-5xl font-black text-yellow-900 drop-shadow mb-3">
          Crafted for Coffee Lovers
        </h1>
        <p className="text-center text-lg sm:text-xl text-amber-700 mb-7 max-w-xl">
          Experience coffee that’s as fresh as your day. Hand-picked beans, expertly roasted––served your way!
        </p>
        <Link
          to="#"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
        >
          Order Coffee
        </Link>
      </header>

      <section className="relative flex justify-center mt-12">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center max-w-5xl w-full mx-4">
          <div className="w-full md:w-1/2 p-7 flex justify-center">
            <div className="relative group cursor-pointer transition hover:scale-105">
              <img
                src="https://images.pexels.com/photos/608127/pexels-photo-608127.jpeg"
                alt="Latte art"
                className="rounded-2xl shadow-xl w-72 h-72 object-cover ring-4 ring-orange-200"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-200/50 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="w-full md:w-1/2 py-10 px-7 text-center md:text-left flex flex-col gap-4">
            <span className="inline-block bg-amber-100 text-orange-600 px-5 py-1 rounded-full font-semibold text-xs uppercase tracking-widest mb-2">
              Signature Blend
            </span>
            <h2 className="text-3xl font-extrabold text-yellow-900">
              Fresh Beans. Pure Joy.
            </h2>
            <p className="text-md text-amber-900 max-w-md">
              Rich aroma, smooth taste––every sip is a celebration.
              <br />
              Try our best-seller, crafted by experts. Always fresh. Served fast.
            </p>
            <Link
              to="#"
              className="inline-block mt-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-full transition shadow-md"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-20 flex justify-center">
        <p className="text-lg text-yellow-800 font-medium rounded-xl bg-white/70 px-8 py-4 shadow-sm">
          Bold sip. Big smile. Start your day with us!
        </p>
      </footer>
    </div>
  );
}
