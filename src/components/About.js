import React from 'react';
import '../styles/About.scss';

import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return(
        <div>
            <Nav/>
            <div className="about">
                <div>about</div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;