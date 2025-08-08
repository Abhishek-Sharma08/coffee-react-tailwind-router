import React from 'react';
import { Link } from 'react-router-dom';
import coffeeIcon from "/coffee-icon-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={coffeeIcon} alt="coffee-logo" width={55} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
              <ul className="text-gray-500 font-medium">
                <li>
                  <a href="https://github.com/Abhishek-Sharma08"  target="_blank" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:underline">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center block mx-auto">
            © 2025  
            <a href="#" className="hover:underline"> Abhishek</a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
