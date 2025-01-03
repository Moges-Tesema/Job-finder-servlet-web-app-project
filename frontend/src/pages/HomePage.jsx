import React, { useState } from "react";
import Header from "../components/Header";
import techJobs from "../components/dataHouse/JobTitle";

function HomePage() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(techJobs.slice(0, 5)); 

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const filtered = techJobs.filter(job => 
      job.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5); 
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-300">
      <Header/>
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 italic">Find Your Dream Tech Job</h1>
        <p className="text-lg b-8 py-10">
          Search jobs from top companies.
        </p>
        
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchInput}
          onChange={handleSearch}
          className="mt-1 p-2 w-1/3 mr-auto border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />

      
        <ul className="mt-4">
          {filteredJobs.map((job, index) => (
            <li key={index} className="text-lg py-1">
              {job}
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
        <p className="bold italic">We are excited to find the best job for your tech skill. If you are a hirer, we are here 
          to find tech talents such as web developers, cloud engineers, AI engineers, data analysts, pen-testers, and more for your project.</p>
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