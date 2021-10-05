import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div className=" text-white footer-bg">

            <div className="d-flex container footer p-5 mt-5" >

                <div className="col-md-3">
                    <h3>kids Life</h3>

                    <p>English Grammar</p>
                    <p>Swimming & Karate</p>
                    <p>Music Class</p>
                    <p> Brought their mind</p>
                </div>
                <div className="col-md-3">
                    <h3>Useful Links</h3>

                    <p>FAQ</p>
                    <p>Gallery</p>
                    <p>Membership</p>
                    <p>Service</p>

                </div>
                <div className="col-md-3">
                    <h3>Connect Us</h3>

                    <p>+002 56777333</p>
                    <p>China building</p>
                    <p>Street road</p>
                    <p> Dhaka,BD</p>
                </div>
                <div>

                </div>
            </div>
            <p> <i class="fas fa-copyright"></i> All rights reserved by LLA</p>
        </div>
    );
};

export default Footer;