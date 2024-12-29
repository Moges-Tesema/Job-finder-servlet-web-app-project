import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
function HomePage() {
  const [search, setSearch]=useState('');
  const HandleSearch =async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('/api/search',{
        search
      });
      console.log(response.data);
    }
    catch(error){
      console.log("some thing went wrong: ",error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-300">
      <Header/>
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg b-8 py-10">
          Search jobs from top companies.
        </p>
        
        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search for jobs..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-96"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4" onClick={HandleSearch}>
            Search
          </button>
        </div>
      </section>

      
      <section className="container mx-auto py-20">
        <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
        <p className="bold italic">We are exited to find the best job for your tech skill. if you are hirer, we are here 
          to finding tech talents such as web developers, cloud engineers, AI engineers, Data analists, Pen-Testers ... for your project.</p>
        
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
