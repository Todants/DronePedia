import { Container, Form, Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {login} from '../services/authService';
import { UserContext } from '../Context/UserContext';

export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser, user} = useContext(UserContext);
    
    if (user) return <Navigate to={"/profile"}/>
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await login(email, password);
        setUser(res);
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    return (
        <Container bg="secondary" style={{ width: "30%", marginTop: '200px', minWidth: "600px" }}>
            <h2 className="text-center mb-4">Авторизация</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Почта</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required 
                    />
                </Form.Group>

                <Button variant="outline-light" type="submit" className="w-100 mt-3">
                    Войти
                </Button>
            </Form>
        </Container>
    );
};