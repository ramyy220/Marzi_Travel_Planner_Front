import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../apiNest/Api';  
import { useNavigate } from 'react-router-dom';  

import '../styles/login.css';

const VerifyOTP = () => {
    const [code, setOtp] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        API.post('/auth/forgotPasswordConf', { code })
            .then(response => {
                console.log('OTP Verified:', response.data);
                toast.success('OTP verified successfully!', {
                    icon: '✅',
                    onClose: () => navigate('/resetpassword')
                });
            })
            .catch(error => {
                console.error('OTP Verification error:', error);
                toast.error('Invalid OTP. Please try again.', {
                    icon: '❌'
                });
            });
    }

    return (
        <Helmet title="Verify OTP">
            <Container>
                <ToastContainer position="top-center" autoClose={5000} />
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Verify OTP</h3>
                        <Form className='auth__form' onSubmit={handleSubmit}>
                            <FormGroup className='auth__group'>
                                <label>OTP Code</label>
                                <input type="text" className="form-control" placeholder='Enter your OTP' value={code} onChange={e => setOtp(e.target.value)} />
                            </FormGroup>
                            <motion.button whileTap={{scale: 1.1}} type='submit' className="auth__btn">Verify OTP</motion.button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default VerifyOTP;
