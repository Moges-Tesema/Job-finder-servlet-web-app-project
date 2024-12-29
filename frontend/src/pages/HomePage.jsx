import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/">
            <Logo/>
          </Link>
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

      
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg mb-8">
          Search thousands of jobs from top companies.
        </p>
        
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-96"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">
            Search
          </button>
        </div>
      </section>

      
      <section className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
        
      </section>

      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Job Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
