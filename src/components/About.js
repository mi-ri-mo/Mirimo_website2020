import React, {Component} from 'react';
import '../styles/About.scss';

import Nav from './NavMain';
import Footer from './Footer';
import MemberItem from './MemberItem';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            designerMemberData: [
                {
                    name: 'Joohah Yoon',
                    position: 'Chief Executive Officer',
                    profileImage: '',
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

            developerSoftMemberData: [
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

            developerWebMemberData: [
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


    render(){
        return(
            <div>
                <Nav style={{background: '#d4dd4d'}}/>
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
                            <div className="wrap-member">
                                <div className="wrap-member-title">
                                    <div className="member-title-border"></div>
                                    <div className="member-title">Designers</div>
                                </div>
                                <div className="wrap-member-items">
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
                            <div className="wrap-member">
                                <div className="wrap-member-title">
                                    <div className="member-title-border"></div>
                                    <div className="member-title">Developers</div>
                                </div>
                                <div>
                                    <div className="wrap-member-items">
                                        {
                                        this.state.developerSoftMemberData.map((member, i) => {
                                            return (<MemberItem
                                                            name={member.name}
                                                            position={member.position}
                                                            profileImage={member.profileImage}
                                                            key={i} 
                                                />);
                                            })
                                        }
                                    </div>
                                    <div className="wrap-member-items">
                                        {
                                        this.state.developerWebMemberData.map((member, i) => {
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