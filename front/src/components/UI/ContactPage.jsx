import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter les données du formulaire ici ou les envoyer à un serveur
    console.log(formData);
    alert('Message envoyé!');
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
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
