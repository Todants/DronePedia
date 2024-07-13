import { useParams } from "react-router"
import {GetProductById} from '../services/prodService.js';
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../Components/coworking.css'
import imag from '../Components/main-image.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Mult from '../Components/Multy.jpg'
import Nonekr from '../Components/Nkr.jpg'
import Copter from '../Components/Helic.jpg'
import l1 from '../Components/images/ins/l1.jpg'
import l2 from '../Components/images/ins/l2.jpg'
import l3 from '../Components/images/ins/l3.jpg'
import l4 from '../Components/images/ins/l4.jpg'
import {Dronspec} from '../Components/Dronspec.js'


export function DronPage() {
    const ar = [l1,l2,l3,l4];
    const params= useParams();
    console.log(params);
    const {data, loading, error} = GetProductById(params.id);
    console.log(data);
    return(
        <Container fluid className="product-details" style={{marginTop: '20px'}}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={6} className="left-image mb-4 mb-md-0" style={{marginTop: '-20px'}}>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ ar[params.id-5] }
          alt="Multy"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Nonekr }
          alt="Non"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Copter }
          alt="Cop"
        />
      </Carousel.Item>
    </Carousel>
          </Col>
          <Col md={6} lg={6} className="right-images">
           <h1>{data.name}</h1>
           <h3>Примерная цена: {data.price}</h3>
          </Col>
        </Row>
        <Dronspec data={data}/>
        <Row>
          <Col md={12}>
            <Card bg="dark" text="white" style={{marginTop: '20px'}}>
              <Card.Body>
              <h2 className="mb-0">{data.name}</h2>
                {/* <div className="d-flex align-items-center mb-3">
                  
                  <div className="score ms-3 d-flex align-items-center">
                    <img src="/static/main/img/heart.png" alt="Heart Icon" className="heart-icon me-2" />
                    <h4 className="mb-0">{product.rating}</h4>
                  </div>
                </div> */}

                <p>{data.description}</p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}