import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../apiNest/Api';  
import { useNavigate } from 'react-router-dom';  

import '../styles/login.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const navigate = useNavigate(); 

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/;
        return regex.test(password);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidPassword(password)) {
            toast.error('Password must be at least 8 characters long, include a capital letter and a special character.');
            return;
        } else if (password !== passwordConf) {
            toast.error('Passwords do not match.');
            return;
        }

        API.post('/auth/forgotPasswordConf', { password })
            .then(response => {
                console.log('Password reset:', response.data);
                toast.success('Password reset successfully!', {
                    icon: '✅',
                    onClose: () => navigate('/login')
                });
            })
            .catch(error => {
                console.error('Password reset error:', error);
                toast.error('Failed to reset password. Please try again.', {
                    icon: '❌'
                });
            });
    }

    return (
        <Helmet title="Reset Password">
            <Container>
                <ToastContainer position="top-center" autoClose={5000} />
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Reset Password</h3>
                        <Form className='auth__form' onSubmit={handleSubmit}>
                            <FormGroup className='auth__group'>
                                <label>New Password</label>
                                <input type="password" className="form-control" placeholder='Enter new password' value={password} onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='auth__group'>
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder='Confirm new password' value={passwordConf} onChange={e => setPasswordConf(e.target.value)} />
                            </FormGroup>
                            <motion.button whileTap={{scale: 1.1}} type='submit' className="auth__btn">Reset Password</motion.button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default ResetPassword;
