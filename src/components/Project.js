import React from 'react';
import '../styles/Project.scss';

import Nav from './Nav';
import Footer from './Footer';

const Project = () => {
    return(
        <div>
            <Nav/>
            <div className="project">
                <div className="container">
                    
                    {/* WORK */}
                    <div className="about-content">
                        <div className="content-title">WORK</div>
                        {/* PROJECT LIST */}
                        <div className="wrap-project">
                            <div className="project-item">
                                <div className="project-title">RAJA</div>
                                <div className="project-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                <div className="project-detail">View more</div>
                            </div>
                            <div className="project-image"></div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-image"></div>
                            <div className="project-item">
                                <div className="project-title">JHsustain</div>
                                <div className="project-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                <div className="project-detail">View more</div>
                            </div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-item">
                                <div className="project-title">8gram</div>
                                <div className="project-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                <div className="project-detail">View more</div>
                            </div>
                            <div className="project-image"></div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-image"></div>
                            <div className="project-item">
                                <div className="project-title">MirimMediaLab</div>
                                <div className="project-intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                <div className="project-detail">View more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Project;