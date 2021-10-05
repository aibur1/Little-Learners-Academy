import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import MoreService from '../MoreService/MoreService';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
   


    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1 className="service-heading">Our Services</h1>

          

            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service 
                    key = {service.id}
                    service={service}
                    
                    ></Service>)
                }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Services;