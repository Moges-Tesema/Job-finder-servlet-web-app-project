import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/"> 
      <img 
        src="../../public/logo.png" 
        alt="Your Company Logo" 
        className="w-20 h-8"
      />
    </Link>
  );
}

export default Logo;