import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployerProfilePage() {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const sampleDevelopers = [
      { id: 1, name: 'John Doe', skills: ['React', 'JavaScript', 'Node.js'] },
      { id: 2, name: 'Jane Smith', skills: ['Python', 'Django', 'Machine Learning'] },
      
    ];
    setDevelopers(sampleDevelopers);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDevelopers = developers.filter((developer) =>
    developer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleContact = (developerId) => {
    navigate(`/contact/${developerId}`);
  };

  const handleViewProfile = (developerId) => {
    navigate(`/developer/${developerId}`);
  };

  return (
    <div className="container mx-auto p-4 bg-green-200 h-screen">
      <img
        src="../public/employer/profile1.png"
        alt="Profile"
        className="w-24 h-24 rounded-full border-2 border-gray-300"
      />
      <h1 className="text-2xl font-bold mb-4">Find Developers</h1>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for developers by skill..."
        className="border border-gray-300 rounded-md p-2 mb-4 w-1/3"
      />

      <ul>
        {filteredDevelopers.map((developer) => (
          <li key={developer.id} className="mb-4 ml-10 mr-10">
            <div className="flex justify-between items-center hover:bg-gray-200">
              <span>{developer.name} - {developer.skills.join(', ')}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleViewProfile(developer.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Profile
                </button>
                <button
                  onClick={() => handleContact(developer.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Contact
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filteredDevelopers.length === 0 && (
        <p>No developers found matching your search.</p>
      )}
    </div>
  );
}

export default EmployerProfilePage;