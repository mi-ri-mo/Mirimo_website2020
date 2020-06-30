import React, {Component} from 'react';
import '../../styles/projects/projects.scss';

import Nav from '../Nav';
import Footer from '../Footer';

class eightGram extends Component {

    render(){
        return(
            <div>
                <Nav/>
                <div className="project">
                    <div className="header">
                        <div className="banner">
                            <div className="container">
                                8gram<br/>
                                Responsive web<br/>
                                <a href="http://www.8gram.com/main/">http://www.8gram.com/main/</a>
                            </div>
                        </div>
                        <div className="overview-wrap">
                            <div className="container">
                                <div className="ov-title">Overview</div>
                                <div className="ov-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <img className="ov-img" src={process.env.PUBLIC_URL + './img/mirimo-logo-w.png'} alt="company logo" />
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="container">
                                <div className="content">
                                    <span className="content-title">Target</span>
                                    <div className="content-sub">주 타겟층은 글로벌 가구 기업 및 시장이다.</div>
                                </div>
                                <div className="content">
                                    <span className="content-title">Goal</span>
                                    <div className="content-sub">아마존, 알리바바 등의 해외 플랫폼에 8gram 제품을 판매한다.</div>
                                </div>
                                <div className="content">
                                    <span className="content-title">Concept</span>
                                    <div className="content-sub">자연 친환경적인 우드슬랩 식탁</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="interview-wrap">
                            <div className="container">
                                <div className="interview-title">Client Interview</div>
                                <div className="intetview-sub">8gram 클라이언트와 만나 8gram이 추구하는 가치와 현 웹사이트의 문제점을 파악했습니다.</div>
                            </div>
                            <div className="interview-img"></div>
                            <div className="interview-info">
                                1. 현 웹사이트의 정보가 방대함<br/>
                                2. 정리되어 있지 않은 네비게이션<br/>
                                3. 반지카페의 아이덴티티와 부적합<br/>
                                4. 통일성 없는 사진<br/>
                                5. 현 웹사이트의 정보가 방대함<br/>
                            </div>
                        </div>
                        <div className="keyword-wrap">
                            <div className="container">
                                <div className="keyword-title">Design Keyword</div>
                                <div className="keyword-sub">8gram 클라이언트와의 인터뷰를 통해 단어 키워드를 도출하여 8gram이 전달하고자 하는 이미지 방향의 키워드를 친환경/합리적/고품질 3가지로 정의하였습니다.</div>
                                <div className="circle-list">
                                    <div className="circle-content">
                                        <div className="circle">
                                            영어
                                            <div className="circle-sub">친환경적인</div>
                                        </div>
                                    </div>
                                    <div className="circle-content">
                                        <div className="circle">
                                            영어
                                            <div className="circle-sub">합리적인</div>
                                        </div>
                                    </div>
                                    <div className="circle-content">
                                        <div className="circle">
                                            영어
                                            <div className="circle-sub">고품질의</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="circle-line"></hr>
                            <div className="design-wrap">
                                <div className="container">
                                    <div className="design-title">Colors</div>
                                    <div className="design-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    <div className="design-colors">
                                        <div className="color">
                                            <span className="color-name">
                                                Gray<br/>
                                                <span className="color-code">#464646</span>
                                            </span>
                                        </div>
                                        <div className="color">
                                            <span className="color-name">
                                                Gray<br/>
                                                <span className="color-code">#464646</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="design-title">Font</div>
                                    <div className="font-name">Noto Sans</div>
                                    <div className="design-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                                    <div className="design-fonts">
                                        <div className="font">
                                            <span className="font-weight1">Gray</span>
                                            <span className="font-weight2">Gray</span>
                                            <span className="font-weight3">Gray</span>
                                            <span className="font-weight4">Gray</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui">
                            <div className="container">
                                <div className="top">
                                    <div className="top-title">8gram UI</div>
                                    <div className="top-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                </div>
                                <div className="top-box"></div>
                            </div>
                            <div className="view">
                                <div className="container">
                                    <div className="view-img1"></div>
                                    <div className="view-img2"></div>
                                    <div className="view-img3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="web">
                            <div className="container">
                                <div className="top">
                                    <div className="top-title">8gram WEB</div>
                                </div>
                            </div>
                            <div className="view">
                                <div className="container">
                                    <div className="view-title">Main Page</div>
                                    <div className="view-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                    <div className="view-box"></div>
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



export default eightGram;