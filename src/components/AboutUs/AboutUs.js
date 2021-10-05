import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <main className="main">
            <section className="about-us">
                <h1>About Us</h1>
                <div className="d-flex about-section container">
                    <div className="col-md-6 about-desc">
                        <h2>Welcome To Little Learners Academy(LLA)</h2>
                        <h6>Will My Schooling organise examinations for my child? How do I find an examination centre? How much do examinations cost? Will my child be able to receive special arrangements in their final examinations? Do I need to provide.</h6>
                        <p>my child needs a special arrangement in exams and assessments? Will my child be able to receive special arrangements in their final examinations? Do I need to provide proof that my child needs a special arrangement in exams and assessments?</p>
                        <button className="btn btn-success">Learn More</button>
                    </div>
                   
                    <div className="col-md-6 about-img">

                    </div>
                </div>
            </section>
            <section className="curriculum">
             
                <div className="d-flex about-section container">
                  
                   
                    <div className="col-md-6 curri-img">

                    </div>
                    <div className="col-md-6 about-desc">
                        <h2>Curriculum</h2>
                        <h6>Will My Schooling organise examinations for my child? How do I find an examination centre? How much do examinations cost? Will my child be able to receive special arrangements in their final examinations? Do I need to provide.</h6>
                        <p>my child needs a special arrangement in exams and assessments? Will my child be able to receive special arrangements in their final examinations? Do I need to provide proof that my child needs a special arrangement in exams and assessments?</p>
                        <button className="btn btn-success">Learn More</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;