import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import axios from "axios";
function HomePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header/>
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg b-8 py-10">
          Search jobs from top companies.
        </p>
        
        <SearchBar/>
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
