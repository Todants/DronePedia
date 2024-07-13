import React, {Component} from "react";
import {Htext} from '../Components/Accordion.js'
import {Carusel} from '../Components/Caruselka.js'
import { Container } from "react-bootstrap";

export function History(){ 
        return (
            <Container fluid style={{width:'90%'}} >
                <Carusel/>
                <Htext/>
            </Container>
            
        );
    }
