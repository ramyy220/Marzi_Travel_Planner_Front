import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/contact.css';
import API from '../../apiNest/Api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      API.post('/auth/contact', formData)
      .then(response => {
          console.log('Message envoyé:', response.data);
          alert('Message envoyé!');
          // Réinitialiser le formulaire
          setFormData({
              name: '',
              email: '',
              message: ''
          });
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  };

  return (
    <Container>
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <div className="form-container">
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Mail</Label>
            <Input type="email" name="email" id="email" placeholder="Your mail" value={formData.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input type="textarea" name="message" id="message" placeholder="Your message" value={formData.message} onChange={handleChange} />
          </FormGroup>
          <Button type="submit" className="connection__button">Send</Button>
        </Form>
      </div>
    </Col>
  </Row>
</Container>

  );
};

export default ContactPage;
