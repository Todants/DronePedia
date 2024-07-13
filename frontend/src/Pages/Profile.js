import React, { useState, useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Импортируем хук useNavigate
import { UserContext } from '../Context/UserContext';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { GetProducts } from '../services/prodService';


export function Profile() {
    const navigate = useNavigate(); // Используем хук useNavigate
    const {setUser} = useContext(UserContext);
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        photo: null
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setFormData({
                    ...formData,
                    photo: upload.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    

    const handleLogout = () => {
        // Ваш код для обработки выхода из профиля
        setUser(null);
        navigate('/login'); // Редирект на страницу логина
    };

    const userStr = localStorage.getItem('user');


    let res = null;

    if (!userStr) {
        return <Navigate to="/login" />;
    }
    else{
        const handleInputChange = (id, value) => {
            setFormData(prevState => ({
                ...prevState,
                [id]: value
            }));
        };
    
        const productSubmit = async (id) => {
            try {
                const response = await axios.patch(`http://127.0.0.1:8000/api/products/${id}/`, {
                    price: formData[id]
                });
            if (response.status == 200){
                const accid = 'accept'+id
                document.getElementById(accid).style.display = 'block';
                console.log(response.status)
            }
            } catch (error) {
                console.error(error);
            }
        };
    
        const id_ac = JSON.parse(userStr).id_accounts
        const handleSubmit = async (e) => {
            
            e.preventDefault();
            try {
                const response = await axios.put('http://127.0.0.1:8000/api/accounts/'+id_ac+'/', formData, {
                });
                //setMessage('Profile updated successfully!');
                
                if (response.status == 200){
                    document.getElementById("accept").style.display = 'block';
                    console.log(response.status)
                }
            } catch (error) {
                //setMessage('Error updating profile.');
                console.error(error);
            }
            
        };
        console.log(id_ac)
        if (id_ac == 22){
            const {data, loading,error} = GetProducts();
            
            return(
                <Container style={{justifyContent: "center"}}>
                <Form onSubmit={handleSubmit}>
                <Table bordered hover size="sm" variant="dark" style={{ width: '60%', marginTop: '50px', marginLeft: "20%" }}>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <input 
                                placeholder={item.price} 
                                required 
                                onChange={(e) => handleInputChange(item.id_product, e.target.value)} 
                            /> 
                        </td>
                        <td>
                            
                            <button id={'button'+item.id_product} onClick={() => productSubmit(item.id_product)}
                            >
                                Cохранить
                            </button>
                            
                        </td>
                        <td style={{width:'100px'}}>
                            <p id={'accept'+item.id_product} style={{display: 'none'}}>Успешно</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
                <Container fluid style={{display:"flex", width:'50%'}}>
                    <Button onClick={handleLogout} 
                    variant="outline-light"
                    className="mt-auto w-100"
                    style={{marginRight: "20px"}}>Выйти</Button>
                </Container>
                </Form>
                </Container>
            )
        }
        else{ 
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} style={{marginTop: "3%"}}>
                    <h2 className="mb-4">Профиль</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                        <Col 
                                md={4} 
                                className="bg-secondary text-center d-flex flex-column align-items-center"
                                style={{ paddingBottom: '10px', paddingRight: '30px',paddingLeft: '30px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
                            >
                                <Image
                                    src={formData.photo || 'https://via.placeholder.com/150'}
                                    roundedCircle
                                    style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer', marginTop: '20%' }}
                                    onClick={handleAvatarClick}
                                />
                                <Form.Control
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleAvatarChange}
                                />
                                <Button
                                    variant="outline-light"
                                    className="mt-auto w-100"
                                    onClick={handleLogout}
                                    
                                >
                                    Выйти из профиля
                                </Button>
                            </Col>
                            <Col md={8} style={{padding: '10px'}}>
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
                                    <Form.Label>Новый пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Введите новый пароль"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <p id='accept' style={{display: 'none'}}>Успешно</p>

                                

                                <Button variant="outline-light" type="submit" className="w-100 mt-3">
                                    Обновить профиль
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
}
}
