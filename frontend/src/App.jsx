import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutAsPage from './pages/AboutAsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import EmployeeRegisterPage from './pages/EmployeeRegisterPage';
import EmployerRegisterPage from './pages/EmployerRegisterPage';
import EmployeeProfilePage from './pages/EmployeeProfilePage';
import EmployerProfilePage from './pages/EmployerProfilePage';
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
        <Route path='/employeeProfile' element={<EmployeeProfilePage/>}/>
        <Route path='/employerProfile' element={<EmployerProfilePage/>}/>
      </Routes>
    </Router>
  );
}
export default App;