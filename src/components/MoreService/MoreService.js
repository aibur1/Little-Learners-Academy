import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import More from '../More/More';
import Services from '../Services/Services';
import './MoreService.css';

const MoreService = () => {
    const [more, setMore] = useState([]);

    useEffect(() => {
        fetch('./more.json')
            .then(res => res.json())
            .then(data => setMore(data))
    }, [])

    return (
        <div>

                <Row xs={1} md={3} className="g-4">
                       {
                           more.map(info => <More
                            key={info.id} 
                            more={info}
                            ></More>)
                       }
                </Row>
            <Footer></Footer>
        </div >
    );
};

export default MoreService;