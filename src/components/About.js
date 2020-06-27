import React from 'react';
import '../styles/About.scss';

import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return(
        <div>
            <Nav/>
            <div className="about">
                <div className="banner">
                    We are with your dream
                </div>
                <div className="container">
                    
                    {/* MIRIMO */}
                    <div className="about-content">
                        <div className="content-title">MIRIMO</div>
                        <div className="content-sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="wrap-identity">
                            <div className="identity-item">
                                <div className="identity-icon"></div>
                                <div className="identity-title">Give back to<br/>Society</div>
                                <div className="identity-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                            <div className="identity-item">
                                <div className="identity-icon"></div>
                                <div className="identity-title">Growth<br/>Potential</div>
                                <div className="identity-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                            <div className="identity-item">
                                <div className="identity-icon"></div>
                                <div className="identity-title">Cooperative<br/>Development</div>
                                <div className="identity-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEMP */}
                <div className="about-temp">
                    temp
                </div>
                <div className="container">
                    
                    {/* PROJECT */}
                    <div className="about-project">
                        <div className="about-title">PROJECTS</div>
                        <div className="about-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                    </div>

                    {/* OUR PEOPLE */}
                    <div className="about-team">
                    <div className="about-title">OUR PEOPLE</div>
                    </div>
                </div>
            

            </div>
            <Footer/>
        </div>
    )
}

export default About;