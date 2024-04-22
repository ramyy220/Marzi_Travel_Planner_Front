import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import DestDetails from '../pages/DestDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/Home" />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/destDetails" element={<DestDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
     </Routes>;
};

export default Routers
