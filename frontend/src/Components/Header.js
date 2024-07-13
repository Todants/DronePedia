import React, {Component, useContext} from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from './logo192.png'
import { UserContext } from "../Context/UserContext";





export function Header() { 
    const {user} = useContext(UserContext);    
       
            return(
                <>
                <Navbar collapseOnSelect expand="md" bg="secondary">
                    <Container fluid>
                        <Navbar.Brand href="/" style={{display: "inherit"}}>
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <h3 style={{color: 'white', marginLeft: '5px'}}>DronePedia</h3>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "space-between", paddingRight: "20px"}} >
                        <Nav className="mr-auto">
                            <Nav.Link href="/history">История</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            {user
                            ?
                                <Nav.Item >
                                <Nav.Link href="/profile">Профиль</Nav.Link>
                                </Nav.Item>
                            :
                                <>
                                    <Nav.Item >
                                        <Nav.Link href="/login">
                                            <Button variant="outline-light">Вход</Button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link href="/registration">
                                            <Button variant="outline-light">Регистрация</Button>
                                        </Nav.Link>
                                    </Nav.Item>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                        
                </>)
}
                       
 
