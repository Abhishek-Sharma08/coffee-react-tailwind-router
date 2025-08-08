import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-br from-white via-amber-50 to-yellow-100 min-h-[60vh]">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <img
              src="https://images.pexels.com/photos/3646111/pexels-photo-3646111.jpeg"
              alt="Barista pouring coffee"
              className="w-80 sm:w-96 rounded-3xl shadow-2xl border-4 border-amber-100 transition hover:scale-105"
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider bg-amber-200 text-amber-800 rounded-xl shadow-sm">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-4">
              Fuel Your Day, <span className="text-amber-700">The Healthy Way</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Coffee isn’t just a delicious beverage — it’s packed with benefits. From boosting energy and improving focus, to providing antioxidants that support your health, each cup helps you stay sharp and feel refreshed. Enjoy coffee that’s as good for your day as it is for your taste buds.
            </p>
            <p className="text-lg text-gray-600">
              Coffee does more than wake you up — it enhances your mood, sharpens your mind, and supports overall well-being. Rich in antioxidants and natural compounds, it helps reduce stress, boost metabolism, and keeps you energized all day. It’s a small habit with big rewards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

