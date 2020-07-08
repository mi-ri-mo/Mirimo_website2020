import React from 'react';
import { Link } from 'react-router-dom';
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
                            <div className="project-image fl-right a1"></div>
                            <div className="project-item">
                                <div className="project-title">RAJA</div>
                                <div className="project-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                <div className="project-detail">
                                    {/* <Link to='./RAJA'>View more</Link> */}
                                    <Link to='./'>View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-image a2"></div>
                            <div className="project-item">
                                <div className="project-title">JHsustain</div>
                                <div className="project-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                <div className="project-detail">
                                    {/* <Link to='./JHsustain'>View more</Link> */}
                                    <Link to='./'>View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-image fl-right a3"></div>
                            <div className="project-item">
                                <div className="project-title">8gram</div>
                                <div className="project-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                <div className="project-detail">
                                    {/* <Link to='./8gram'>View more</Link> */}
                                    <Link to='./'>View more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-project">
                            <div className="project-image a4"></div>
                            <div className="project-item">
                                <div className="project-title">MirimMediaLab</div>
                                <div className="project-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                <div className="project-detail">
                                    {/* <Link to='./MirimMediaLab'>View more</Link> */}
                                    <Link to='./'>View more</Link>
                                </div>
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