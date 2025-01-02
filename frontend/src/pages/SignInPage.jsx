import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!username || !email) {
      alert('Please enter both username and email');
      return;
    }
   
    try {
      
      const response = await axios.post('localhost:5000/api/login', {
        username,
        email,
      });

      
      navigate('/employeeProfile');
    } catch (error) {
      
      console.error('Login error:', error);
      alert('Invalid username or email');
      navigate('/employeeProfile');
    }
    
  };
  return (
    <>
      <Logo />
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
                required
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
                required
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