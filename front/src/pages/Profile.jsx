import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../styles/login.css'; 
import API from '../apiNest/Api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUser(parsedUserInfo);
      setUsername(parsedUserInfo.username);
    } else {
      console.log("No user info found. User might not be logged in.");
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API.put('/auth/updateProfile', {
        userId: user.userId, 
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    
    console.log('Update Profile:', response.message);
    localStorage.setItem('userInfo', JSON.stringify(response.data));
    alert('Profile updated successfully!');
    } catch (error) {
      console.error('Update Profile error:', error);
      alert('An error occurred. Please try again.');
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    localStorage.removeItem('token'); // Supprimer le JWT du localStorage
    window.location.href = '/login'; 
  };

  return (
    <Container>
      <Row>
        <Col>
        <h3 className="centeredTitle">Profile</h3>
        <Form className='auth__form' onSubmit={handleSubmit}>
            <FormGroup className='auth__group'>
              <label>Username</label>
              <input type="text" className="form-control" placeholder='Enter your username' value={username} onChange={handleUsernameChange} />
            </FormGroup>
            <FormGroup className='auth__group'>
              <label>Password</label>
              <input type="password" className="form-control" placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
            </FormGroup>
            <button type='submit' className="auth__btn">Update Profile</button>
          </Form>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
