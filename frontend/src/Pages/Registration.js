

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {register} from '../services/authService';

export function Registration(){

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;
    
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
    
        try {
          await register(username, email, password);
          navigate('/login');
        } catch (error) {
          console.error("Registration failed", error);
        }
      };

    return (
        <Container  bg="secondary" style={{ width: "80%", marginTop: '200px', minWidth: "600px" }}>
                       <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2 className="mb-4">Регистрация</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите имя пользователя"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-4">
                            <Form.Label>Подтвердите пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Подтвердите пароль"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="outline-light" type="submit" className="w-100 mt-3">
                            Зарегистрироваться
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

