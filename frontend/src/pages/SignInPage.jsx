import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:300/api/login', { username, email });
      console.log(response.data); 
    } catch (error) {
      console.error('Login failed:', error);

    }
  };

  return (
    <>
     <Logo/>
   
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignInPage;