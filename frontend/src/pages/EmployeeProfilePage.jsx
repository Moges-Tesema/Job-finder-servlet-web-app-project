import React, { useState } from 'react';
import jobTitles from '../components/dataHouse/JobTitle';

const employeeData = {
  name: 'John Doe',
  jobTitle: 'Software Engineer',
  experience: '5 years of experience in Full Stack Development',
  profilePhoto: '../public/profile.png',
  skills: ['JavaScript', 'React', 'Node.js', 'TailwindCSS'],
};

function EmployeeProfilePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [appliedTechJob, setAppliedTechJob] = useState(false);
  const [appliedCompanyJob, setAppliedCompanyJob] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleApplyJob = (job) => {
    if (!appliedTechJob && !appliedCompanyJob) {
      setAppliedJobs([job]);
      setAppliedTechJob(true);
      setAppliedCompanyJob(true);
    }
  };

  const filteredJobs = jobTitles.filter((jobTitle) =>
    jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <img
              src={employeeData.profilePhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{employeeData.name}</h1>
              <p className="text-lg text-gray-600">{employeeData.jobTitle}</p>
              <p className="mt-2 text-gray-700">{employeeData.experience}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Skills:</h3>
                <ul className="list-disc pl-5">
                  {employeeData.skills.map((skill, index) => (
                    <li key={index} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Search Jobs</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for jobs..."
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((jobTitle, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border-b border-gray-300"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{jobTitle}</h3>
                  </div>
                  <button
                    onClick={() => handleApplyJob(jobTitle)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    disabled={appliedTechJob && appliedCompanyJob}
                  >
                    Apply
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No jobs found.</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/3 ml-8">
        <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Applied Jobs</h2>
          {appliedJobs.length > 0 ? (
            <ul className="space-y-2">
              {appliedJobs.map((job, index) => (
                <li key={index} className="p-4 border-b border-gray-300">
                  <h3 className="font-semibold text-lg">{job}</h3>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your applied job will be here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfilePage;