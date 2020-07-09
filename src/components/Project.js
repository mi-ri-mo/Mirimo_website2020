import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.scss';

import Nav from './Nav';
import Footer from './Footer';

const Project = () => {
  const onClickProject = () => {
    alert('7월 9일 공개될 예정입니다');
  };

  return (
    <div>
      <Nav />
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
                <div className="project-intro">
                Overseas e-commerce platform marketing consulting service data aimed at selling 
                wood-slab products of Raja Furniture, an eco-friendly general furniture company. 
                It aims to break away from the furniture industry, which has long been called the leading 
                domestic industry, and sell RAJA’s Woodslab products to Europe through e-commerce platforms 
                Amazon and Alibaba.
                </div>
                <div className="project-detail">
                  {/* <Link to='./RAJA'>View more</Link> */}
                  <Link to="./project" onClick={onClickProject}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
            <div className="wrap-project">
              <div className="project-image a2"></div>
              <div className="project-item">
                <div className="project-title">JHsustain</div>
                <div className="project-intro">
                  JH SUSTAIN is a social enterprise that plans and implements international 
                  development programs and helps developing countries and public institutions by 
                  establishing a global network related to the environment. Through the website 
                  renewal, we will make it easier for more public institutions to contact companies, 
                  creating opportunities for more projects, and allowing Korean institutions to pay more 
                  attention to them with Korean and English websites.
                </div>
                <div className="project-detail">
                  {/* <Link to='./JHsustain'>View more</Link> */}
                  <Link to="./project" onClick={onClickProject}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
            <div className="wrap-project">
              <div className="project-image fl-right a3"></div>
              <div className="project-item">
                <div className="project-title">8gram</div>
                <div className="project-intro">
                  8gram is a theme cafe that combines a workshop where you can make your own rings, 
                  bracelets, and necklaces, and a drink cafe. For smooth marketing, the goal is to 
                  establish a system that can inform both Koreans and foreigners of the dispute and 
                  apply for reservations by enhancing website renewal and SNS utilization.
                </div>
                <div className="project-detail">
                  {/* <Link to='./8gram'>View more</Link> */}
                  <Link to="./project" onClick={onClickProject}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
            <div className="wrap-project">
              <div className="project-image a4"></div>
              <div className="project-item">
                <div className="project-title">MirimMediaLab</div>
                <div className="project-intro">
                  Along with Mirim Media Lab, I participated in the production of ASEAN vocational 
                  education cooperation contents for 2020 to cope with delays and suspensions caused 
                  by the spread of the COVID-19, and to secure the sustainability of vocational 
                  education cooperation and expand performance. We hope to create a remote operation 
                  foundation for ASEAN vocational education cooperation after COVID-19.
                </div>
                <div className="project-detail">
                  {/* <Link to='./MirimMediaLab'>View more</Link> */}
                  <Link to="./project" onClick={onClickProject}>
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
