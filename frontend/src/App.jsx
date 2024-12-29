import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutAsPage from './pages/AboutAsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import EmployeeRegisterPage from './pages/EmployeeRegisterPage';
import EmployerRegisterPage from './pages/EmployerRegisterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutAsPage />} /> 
        <Route path="/signin" element={<SignInPage />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path='/signup/employer' element={<EmployerRegisterPage/>}/>
        <Route path="/signup/employee" element={<EmployeeRegisterPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;