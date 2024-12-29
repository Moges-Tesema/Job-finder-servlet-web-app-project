import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
      
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-800">About Us</h1>
          <p className="text-xl text-gray-600 mt-4">Learn more about JobFinder and our mission</p>
        </div>
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At JobFinder, our mission is to simplify the job search process and connect job seekers with their ideal employers. 
            We believe that everyone deserves the opportunity to find meaningful work, and we strive to provide a platform 
            that makes that possible. With thousands of job listings across various industries, we aim to make the job search 
            process as efficient and accessible as possible.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Current Version</h2>
          <p className="text-lg text-gray-700">
            Our current platform version is <strong>v1.0.0</strong>. We are constantly working to improve the user experience, 
            add new features, and provide regular updates. Stay tuned for upcoming enhancements and new tools to help you in your job search.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:support@jobfinder.com" className="text-blue-600 hover:text-blue-800">support@jobfinder.com</a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-lg text-gray-700">
              <strong>Address:</strong> 1234 JobFinder St, Suite 100, Tech City, 12345
            </p>
          </div>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Additional Information</h2>
          <p className="text-lg text-gray-700">
            At JobFinder, we value transparency, accessibility, and trust. We work with a wide variety of employers, from startups 
            to established companies, ensuring a diverse range of opportunities. We’re committed to providing a user-friendly 
            experience to help you navigate the job market with confidence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;