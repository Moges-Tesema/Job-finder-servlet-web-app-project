import Logo from "../components/Logo";
import React, { useState } from 'react';
import axios from 'axios';
import jobTitles from "../components/dataHouse/JobTitle";

const EmployeeRegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const experiences = ['0-2', '3-5', '6-8', '9+'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/employees', {
        firstName,
        lastName,
        email,
        password,
        birthDate,
        address,
        jobTitle,
        experience,
      },{
        header:{
          "content-type":"application/json"
        }
      });

      console.log('Employee created successfully:', response.data);
      
    } catch (error) {
      console.error('Error creating employee:', error);
      
    }
  };

  return (
    <div className="min-h-screen bg-green-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
        </div>
      </header>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Employee Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
         
          <div className="flex items-center space-x-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 w-1/5">
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
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 w-1/5">
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-1/5">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          
          <div className="flex items-center space-x-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-1/5">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          
          <div className="flex items-center space-x-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 w-1/5">
              Birth Date:
            </label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         
          <div className="flex items-center space-x-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 w-1/5">
              Address:
            </label>
            <textarea
              id="address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-xs"
            />
          </div>

          
          <div className="flex items-center space-x-4">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 w-1/5">
              Job Title:
            </label>
            <select
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
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

          
          <div className="flex items-center space-x-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 w-1/5">
              Experience:
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 p-2 w-2/3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Experience</option>
              {experiences.map((exp) => (
                <option key={exp} value={exp}>
                  {exp} years
                </option>
              ))}
            </select>
          </div>

          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegisterPage;