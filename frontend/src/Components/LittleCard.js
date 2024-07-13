import React, {Component} from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imag from '../Components/Multy.jpg';
import { Link } from "react-router-dom";
import l1 from '../Components/images/l1.jpg'
import l2 from '../Components/images/l2.jpg'
import l3 from '../Components/images/l3.jpg'
import l4 from '../Components/images/l4.jpg'

export function LittleCard({data}) {
    const {name, id_product, price} = data; 
    const ar = [l1,l2,l3,l4];
    return (
        <Link to={`/card/${id_product}`} style={{textDecoration: "none"}}>
            <Card style={{ width: '18rem', margin: '10px'}} bg="secondary" text="white">

            <Card.Img variant="top" src={ar[id_product-5]} />
            <Card.Body >
            <Card.Title style={{textDecoration: "none"}}>{name}</Card.Title>
            <Card.Text style={{textDecoration: "none"}}>
                Цена: {price}
            </Card.Text>
            </Card.Body>
            </Card>
        </Link>
    );
}