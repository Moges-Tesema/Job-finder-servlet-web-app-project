import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/"> 
      <img 
        src="../../public/logo.png" 
        alt="Your Company Logo" 
        className="w-20 h-8 bg-red-600"
      />
    </Link>
  );
}

export default Logo;