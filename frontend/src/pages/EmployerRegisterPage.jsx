import Logo from "../components/Logo";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jobTitles from "../components/dataHouse/JobTitle";
import { useNavigate } from "react-router-dom";

const EmployerRegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [jobToHire, setJobToHire] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !companyName || !address || !officeAddress || !jobToHire) {
      alert('Please fill in all fields before submitting');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/employeeRegister', {
        firstName,
        lastName,
        companyName,
        address,
        officeAddress,
        jobToHire,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log('Employer created successfully:', response.data);

      navigate('/employerProfile');
    } catch (error) {
      console.error('Error creating employer:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
        </div>
      </header>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Employer Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center space-x-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 w-1/3">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div> 
          <div className="flex items-center space-x-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 w-1/3">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 w-1/3">
              Company Name:
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 w-1/3">
              Address:
            </label>
            <textarea
              id="address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="officeAddress" className="block text-sm font-medium text-gray-700 w-1/3">
              Office Address:
            </label>
            <textarea
              id="officeAddress"
              rows="4"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="jobToHire" className="block text-sm font-medium text-gray-700 w-1/3">
              Job to Hire:
            </label>
            <select
              id="jobToHire"
              value={jobToHire}
              onChange={(e) => setJobToHire(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Job Title</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
          >
            Register Employer
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegisterPage;