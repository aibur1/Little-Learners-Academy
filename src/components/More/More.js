import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './More.css';

const More = (props) => {
   const {img, name, price} = props.more;
//    showing more service
    return (
        
        <div >
 
            <Col>
                <Card className="more-cart">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name : {name}</Card.Title>
                       <p>Price : $ {price}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default More;