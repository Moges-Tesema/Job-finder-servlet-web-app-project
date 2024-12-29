import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Header() {
  return (
    
    <header className="bg-green-100  shadow-md">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    <Logo/>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}

export default Header;