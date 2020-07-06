import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/About.scss';

import Nav from './NavMain';
import Footer from './Footer';
import MemberItem from './MemberItem';

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
                    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                    name: 'Sunwoo Joo',
                    position: 'Chief Strategy Officer',
                    profileImage: '',
                },
                {
                    name: 'Seokhee Kong',
                    position: 'Chief Creative Officer',
                    profileImage: '',
                },
                {
                    name: 'Yejin So',
                    position: 'Chief Design Officer',
                    profileImage: '',
                },
            ],

            softwareDeveloperMemberData: [
                {
                    name: 'Dayoung Hwang',
                    position: 'Chief Financial Officer',
                    profileImage: '',
                },
                {
                    name: 'Minji Jung',
                    position: 'Chief Information Officer',
                    profileImage: '',
                },
                {
                    name: 'Minji Kim',
                    position: 'Chief Risk Officer',
                    profileImage: '',
                },
                {
                    name: 'Nayoung Yang',
                    position: 'Chief Marketing Officer',
                    profileImage: '',
                },
            ],

            webSolutionDeveloperMemberData: [
                {
                    name: 'Yealyn Won',
                    position: 'Chief Operating Officer',
                    profileImage: '',
                },
                {
                    name: 'Eunjung Jeon',
                    position: 'Chief Technology Officer',
                    profileImage: '',
                },
                {
                    name: 'Eunseo Kang',
                    position: 'Chief Knowledge Officer',
                    profileImage: '',
                },
                {
                    name: 'Jimin Kang',
                    position: 'Chief Quality Officer',
                    profileImage: '',
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
              console.log(this.state.slideNumber)
              this.setState({slideNumber: 1, bannerIndex: "1/2"})
            }
            else if(this.state.slideNumber === 1){
              console.log(this.state.slideNumber)
              this.setState({slideNumber: 0, bannerIndex: "2/2"})
            }
        }, 5000);
    };

    render(){
        return(
            <div>
                <Nav/>
                <div className="about">
                    <div className="wrap-banner">
                        <div id="slider">
                            <figure>
                                <div className="banner-item" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1571149828506-c48f1610314b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'})`}}>
                                </div>
                                <div className="banner-item" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1494271823928-a80211877d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'})`}}>
                                </div>
                                <div className="banner-item" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1571149828506-c48f1610314b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'})`}}>
                                </div>
                                <div className="banner-item" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1494271823928-a80211877d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'})`}}>
                                </div>
                                <div className="banner-item" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1571149828506-c48f1610314b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'})`}}>
                                </div>
                            </figure>
                        </div>
                        <div className="wrap-banner-content">
                            <div className="wrap-subtitle">
                                <div className="subtitle-border"></div>
                                <div className="subtitle-text">Hello</div>
                            </div>
                            <div className="banner-title">We are with your Dream1</div>
                        </div>
                        <div className="banner-index">{this.state.bannerIndex}</div>
                    </div>

                    <div className="about-content">
                        <div className="container">
                            {/* 회사소개 */}
                            <div className="company">
                                <div className="company-title">MIRIMO</div>
                                <div className="company-intro">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </div>
                            </div>

                            {/* 아이덴티티 */}
                            <div className="identity">
                                <div className="wrap-identity">
                                    <div className="identity-item">
                                        <div className="identity-icon icon1"></div>
                                        <div className="identity-title">Give back to<br/>Society</div>
                                        <div className="identity-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        </div>
                                    </div>

                                    <div className="identity-item">
                                        <div className="identity-icon icon2"></div>
                                        <div className="identity-title">Give back to<br/>Society</div>
                                        <div className="identity-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        </div>
                                    </div>

                                    <div className="identity-item">
                                        <div className="identity-icon icon3"></div>
                                        <div className="identity-title">Give back to<br/>Society</div>
                                        <div className="identity-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 사진 */}
                    <div className="about-temp">

                    </div>

                    {/* 프로젝트 */}
                    <div className="about-projects">
                        <div className="container">
                            <div className="about-content-title">PROJECTS</div>
                            <div className="about-content-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>

                            <div className="projects-desktop">
                                <div className="wrap-project">
                                    <div className="project-item">
                                        <div className="project-item-number">01</div>
                                        <div className="project-item-title">RAJA</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/Raja"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-item-number">02</div>
                                        <div className="project-item-title">JSsustain</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/JHsustain"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-item-number">03</div>
                                        <div className="project-item-title">8gram</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/8gram"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>
                                </div>
                                <div className="wrap-project">
                                    <div className="project-item">
                                        <div className="project-item-number">04</div>
                                            <div className="project-item-title">MirimMediaLab</div>
                                            <div className="project-item-intro">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            </div>
                                            <NavLink to="/MirimMediaLab"><div className="project-item-viewmore">View more</div></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="projects-mobile">
                                    <div className="project-item">
                                        <div className="project-item-number">01</div>
                                        <div className="project-item-title">RAJA</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/Raja"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-item-number">02</div>
                                        <div className="project-item-title">JSsustain</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/JHsustain"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-item-number">03</div>
                                        <div className="project-item-title">8gram</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/8gram"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>

                                    <div className="project-item">
                                        <div className="project-item-number">04</div>
                                        <div className="project-item-title">MirimMediaLab</div>
                                        <div className="project-item-intro">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </div>
                                        <NavLink to="/MirimMediaLab"><div className="project-item-viewmore">View more</div></NavLink>
                                    </div>
                                </div>
                           </div>
                       </div>

                       {/* 팀원 소개 */}
                        <div className="about-people">
                            <div className="container">
                                <div className="about-content-title">OUR PEOPLE</div>
                                <div className="wrap-people">
                                    <div className="wrap-major">
                                        <div className="wrap-major-title">
                                            <div className="major-border"></div>
                                            <div className="major-title">Designer</div>
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
                                    <div className="wrap-major">
                                        <div className="wrap-major-title">
                                            <div className="major-border"></div>
                                            <div className="major-title">Developer</div>
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
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}



export default About;