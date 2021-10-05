import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeacher from '../OurTeacher/OurTeacher';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css';


const Home = () => {

    return (
        <div>
           
            <Header></Header>
            <OurTeacher></OurTeacher>
            <Services></Services>
            
        </div>
    );
};

export default Home;