import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/About.scss';

import Nav from './NavMain';
import Footer from './Footer';
import MemberItem from './MemberItem';

// import Identity1 from '../resource/img/identity-1.png'
// import Identity2 from '../resource/img/identity-2.png'
// import Identity3 from '../resource/img/identity-3.png'

import Banner1 from '../resource/img/main_1.png'
import Banner2 from '../resource/img/main_2.png'

import Project1 from '../resource/img/about/about-project-1.png'
import Project2 from '../resource/img/about/about-project-2.png'
import Project3 from '../resource/img/about/about-project-3.jpg'
import Project4 from '../resource/img/about/about-project-4.png'

import Designer1 from '../resource/img/member/CEO.jpg'
import Designer2 from '../resource/img/member/CSO.jpg'
import Designer3 from '../resource/img/member/CCO.jpg'
import Designer4 from '../resource/img/member/CDO.jpg'

import Developer1 from '../resource/img/member/CFO.jpg'
import Developer2 from '../resource/img/member/CIO.jpg'
import Developer3 from '../resource/img/member/CRO.jpg'
import Developer4 from '../resource/img/member/CMO.jpg'

import Developer5 from '../resource/img/member/COO.jpg'
import Developer6 from '../resource/img/member/CTO.jpg'
import Developer7 from '../resource/img/member/CKO.jpg'
import Developer8 from '../resource/img/member/CQO.jpg'

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            slideNumber: 1,
            bannerIndex: "1/2",
            designerMemberData: [
                {
                    name: 'Joohah Yoon',
                    position: 'Chief Executive Officer',
                    profileImage: Designer1,
                },
                {
                    name: 'Sunwoo Joo',
                    position: 'Chief Strategy Officer',
                    profileImage: Designer2,
                },
                {
                    name: 'Seokhee Kong',
                    position: 'Chief Creative Officer',
                    profileImage: Designer3,
                },
                {
                    name: 'Yejin So',
                    position: 'Chief Design Officer',
                    profileImage: Designer4,
                },
            ],

            softwareDeveloperMemberData: [
                {
                    name: 'Dayoung Hwang',
                    position: 'Chief Financial Officer',
                    profileImage: Developer1,
                },
                {
                    name: 'Minji Jung',
                    position: 'Chief Information Officer',
                    profileImage: Developer2,
                },
                {
                    name: 'Minji Kim',
                    position: 'Chief Risk Officer',
                    profileImage: Developer3,
                },
                {
                    name: 'Nayoung Yang',
                    position: 'Chief Marketing Officer',
                    profileImage: Developer4,
                },
            ],

            webSolutionDeveloperMemberData: [
                {
                    name: 'Yealyn Won',
                    position: 'Chief Operating Officer',
                    profileImage: Developer5,
                },
                {
                    name: 'Eunjung Jeon',
                    position: 'Chief Technology Officer',
                    profileImage: Developer6,
                },
                {
                    name: 'Eunseo Kang',
                    position: 'Chief Knowledge Officer',
                    profileImage: Developer7,
                },
                {
                    name: 'Jimin Kang',
                    position: 'Chief Quality Officer',
                    profileImage: Developer8,
                },
            ]
        }
    }

    componentDidMount() {
        this.startCarousel();
    }


    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            if(this.state.slideNumber === 0){
              this.setState({slideNumber: 1, bannerIndex: "1/2"})
            }
            else if(this.state.slideNumber === 1){
              this.setState({slideNumber: 0, bannerIndex: "2/2"})
            }
        }, 5000);
    };

    render(){
        return(
            <div>
                <Nav/>
                <div className="about">
                    <div className="about-banner">
                        <div className="wrap-banner">
                            <div id="slider">
                                <figure>
                                    <div className="banner-item" style={{backgroundImage: `url(${Banner1})`}}>
                                    </div>
                                    <div className="banner-item" style={{backgroundImage: `url(${Banner2})`}}>
                                    </div>
                                    <div className="banner-item" style={{backgroundImage: `url(${Banner1})`}}>
                                    </div>
                                    <div className="banner-item" style={{backgroundImage: `url(${Banner2})`}}>
                                    </div>
                                    <div className="banner-item" style={{backgroundImage: `url(${Banner1})`}}>
                                    </div>
                                </figure>
                            </div>
                            <div className="wrap-banner-content">
                                <div className="wrap-subtitle">
                                    <div className="subtitle-border"></div>
                                    <div className="subtitle-text">Hello</div>
                                </div>
                                <div className="banner-title">We are with your Dream</div>
                                <div className="banner-title-mobile">We are<br/>with your Dream</div>
                            </div>
                            <div className="banner-index">{this.state.bannerIndex}</div>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="cus-container">
                            <div className="content-title">MIRIMO</div>
                            <div className="content-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </div>
                            <div className="content-background"></div>
                        </div>
                    </div>
                    <div className="about-identity">
                        <div className="wrap-identity">
                            {/* IDENTITY ITEM 1 */}
                            <div className="identity-item">
                                {/* <div className="ident-icon" style={{backgroundImage: `url(${Identity1})`}}></div> */}
                                <div className="ident-title">Give back to<br/>Society</div>
                                <div className="ident-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                </div>
                            </div>


                            {/* IDENTITY ITEM 2 */}
                            <div className="identity-item">
                                {/* <div className="ident-icon" style={{backgroundImage: `url(${Identity2})`}}></div> */}
                                <div className="ident-title">Give back to<br/>Society</div>
                                <div className="ident-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                </div>
                            </div>

                            {/* IDENTITY ITEM 3 */}
                            <div className="identity-item">
                                {/* <div className="ident-icon" style={{backgroundImage: `url(${Identity3})`}}></div> */}
                                <div className="ident-title">Give back to<br/>Society</div>
                                <div className="ident-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-temp">

                    </div>
                    <div className="about-project">
                        <div className="about-project-title">PROJECTS</div>
                        <div className="about-project-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                        <div className="wrap-project">
                            {/* PROJECT ITEM 1 */}
                            <NavLink to="/Raja">
                                <div className="project-item" style={{backgroundImage: `url(${Project1})`}}>
                                    
                                    <div className="project-background">
                                        <div className="project-number">01</div>
                                        <div className="project-title">RAJA</div>
                                        <div className="project-content">
                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </div>
                                        <div className="project-viewmore">View more</div>
                                    </div>
                                </div>
                            </NavLink>

                            {/* PROJECT ITEM 2 */}
                            <NavLink to="/">
                                <div className="project-item" style={{backgroundImage: `url(${Project2})`}}>
                                    
                                    <div className="project-background">
                                        <div className="project-number">02</div>
                                        <div className="project-title">JSsustain</div>
                                        <div className="project-content">
                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </div>
                                        <div className="project-viewmore">View more</div>
                                    </div>
                                </div>
                            </NavLink>

                            {/* PROJECT ITEM 3 */}
                            <NavLink to="/">
                                <div className="project-item" style={{backgroundImage: `url(${Project3})`}}>
                                    
                                    <div className="project-background">
                                        <div className="project-number">03</div>
                                        <div className="project-title">8gram</div>
                                        <div className="project-content">
                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </div>
                                        <div className="project-viewmore">View more</div>
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* PROJECT ITEM 4 */}
                            <NavLink to="/mirimmedialab">
                                <div className="project-item" style={{backgroundImage: `url(${Project4})`}}>
                                    
                                    <div className="project-background">
                                        <div className="project-number">04</div>
                                        <div className="project-title">MirimMediaLab</div>
                                        <div className="project-content">
                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </div>
                                        <div className="project-viewmore">View more</div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="about-people">
                        <div className="people-title">OUR PEOPLE</div>
                        <div className="wrap-people">
                            <div className="wrap-subtitle">
                                <div className="subtitle-border"></div>
                                <div className="subtitle-text">Designer</div>
                            </div>
                            <div className="wrap-member">
                            {
                                this.state.designerMemberData.map((member, i) => {
                                    return (<MemberItem
                                                name={member.name}
                                                position={member.position}
                                                profileImage={member.profileImage}
                                                key={i} 
                                        />);
                                    })
                            }
                            </div>
                        </div>
                        <div className="wrap-people">
                            <div className="wrap-subtitle">
                                <div className="subtitle-border"></div>
                                <div className="subtitle-text">Developer</div>
                            </div>
                            <div className="wrap-member">
                            {
                                this.state.softwareDeveloperMemberData.map((member, i) => {
                                    return (<MemberItem
                                                name={member.name}
                                                position={member.position}
                                                profileImage={member.profileImage}
                                                key={i} 
                                        />);
                                    })
                            }
                            </div>
                            <div className="wrap-member">
                            {
                                this.state.webSolutionDeveloperMemberData.map((member, i) => {
                                    return (<MemberItem
                                                name={member.name}
                                                position={member.position}
                                                profileImage={member.profileImage}
                                                key={i} 
                                        />);
                                    })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}



export default About;