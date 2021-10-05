import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className="img-bg  d-flex">
           {/* header area */}
            <div className="col-md-5 heading">
                <div className="heading-color">
                    <h2>Welcome To LLA</h2>
                    <h1>Perfect Education </h1>
                    <h2>For Your Child</h2>
                </div>
                <h6>Enrolling your child in a high-quality early learning program would promote his learning and development. </h6>
            </div>
            <div className="col-md-7 lla-bg ">

            </div>
        </div>
    );
};

export default Header;