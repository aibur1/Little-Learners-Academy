import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const  Service = (props) => {
    const { name, img, price } = props?.service;
    return (
    // single service
       <div>
            <Col>
            <Card className="cart">
                
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Service Name : {name}</Card.Title>
                    <h4>Price  : ${price}</h4>
                    <Link to="/services">
                        <button>See More</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
       </div>
       

    );
};

export default Service;