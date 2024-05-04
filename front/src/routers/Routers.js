import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import DestDetails from '../pages/DestDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import VerifyOTP from '../pages/Otp';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRouter';



const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/Home" />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/DestDetails/:id" element={<DestDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgotpassword" element={<ForgotPassword />} />
    <Route path="/verifyotp" element={<VerifyOTP />} />
    <Route path="/resetpassword" element={<ResetPassword />} />
    <Route path="/profile" element={<PrivateRoute component={Profile} />} />
  </Routes>;
};

export default Routers
