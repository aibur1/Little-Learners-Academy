import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './PopularService.css';

const PopularService = () => {
    // showing popular service
    return (
        <div className="my-5">
            <h2 className="title mb-5">WHY WE POPULAR</h2>
            <div className="bg-color ">

                <Row xs={1} md={3} className="g-4 ">

                    <Col className="">
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Baby Kiddie
                                    Age 1 to 2</Card.Title>
                                <Card.Text>
                                    This is our primary education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next level 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Mini Kiddie
                                    Age 2 to 4</Card.Title>
                                <Card.Text>
                                This is our secondary education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next level .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Super Kiddie
                                    Age 4 to 6</Card.Title>
                                <Card.Text>
                                This is our next education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next level 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Child with
                                    Age 7 to 9</Card.Title>
                                <Card.Text>
                                This is our fourth education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next level 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Baby with age 3.5 to 6</Card.Title>
                                <Card.Text>
                                This is our primary education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next leve .
                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Body className="color-bg">
                                <Card.Title>Baby Kiddie
                                    Age 3 to 5</Card.Title>
                                <Card.Text>
                                This is our modified education service and most of the guardians like it and it becomes most popular course in our system .we try to upgrade it to the next level 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>

    );
};

export default PopularService;