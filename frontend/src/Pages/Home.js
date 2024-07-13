import React, {Component} from "react";
import { CardSubtitle} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {LittleCard} from '../Components/LittleCard.js';
import {GetProducts} from '../services/prodService.js';
import { Container, Row, Col } from 'react-bootstrap';

//const cards = Array.from({ length: 9 }); // создаем массив с 9 элементами

const cardData = [
];



export function Home(){ 
    // const cardData = GetProducts();
    const {data, loading,error} = GetProducts();
    console.log("asdsad", cardData);

    if (loading){
        return <div>Loading</div>
    }
    if (error){
        return <div>{error}</div>
    }
    
    return (
        <>
        <h2 style={{ marginTop: '20px'}}>Справочник по дронам и квадрокоптерам</h2>
        <Container style={{ marginTop: '20px'}}>
            
            <Row className="g-4">
                {data.map((card, index) => (
                    <Col key={index}  xs={15} sm={6} md={4} lg={3} >
                        <LittleCard  data={card} />
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
    }
