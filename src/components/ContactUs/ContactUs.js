import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
        <section className="contact">
            <div className="d-flex ">
                <div className="col-md-3">
                    <h3>Postal Address</h3>
                    <p>LLA Kindergarten</p>
                    <p>12-14 Walton Street</p>
                    <p> Dhaka, BD</p>
                </div>
                <div className="col-md-3">
                    <h3>Phone & Email</h3>
                    <p>+123 456 7890,</p>
                    <p>+098 765 4321</p>
                    <p> ontact@zoutula.com</p>
                </div>
                <div className="col-md-3">
                    <h3>Business Hours</h3>
                    <p>Sunday-Thursday</p>
                    <p>8.00 am – 6.00 pm</p>
                    <p> Weekend Closed</p>
                </div>
                <div className="col-md-3">
                    <h3>LLA Hours</h3>
                    <p>Monday-Saturday</p>
                    <p>7.00 am – 7.00 pm</p>
                    <p>Sunday Closed</p>
                </div>
            </div>
        </section>
        <section>
           <h1>Contact Us</h1>
           <h5>We would love to hear from you!</h5>
           <input className="w-50 bg-color" type="text" placeholder="Name" />
           <br /> <br />
           <input className="w-50 bg-color" type="text" placeholder="Email" />
           <br /> <br />
           <textarea className="w-50 bg-color" id="" cols="40" rows="10" placeholder="Message"></textarea>
           <br />
           <button className=" contact-btn">Send</button>
        </section>
        </div>
    );
};

export default ContactUs;