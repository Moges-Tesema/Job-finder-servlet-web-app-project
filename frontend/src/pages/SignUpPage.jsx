import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const SignUpPage = () => {
  return (
    <>
    <Logo/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Join Us</h2>
        <p className="text-center mb-8">
          Join as an Employee or Employer
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/signup/employer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            I'm an Employer, Hiring for Jobs
          </Link>
          <Link
            to="/signup/employee"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            I'm an Employee, Looking for Jobs
          </Link>
        </div>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;