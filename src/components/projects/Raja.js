import React, {Component} from 'react';
import '../../styles/projects/Raja.scss';

import Nav from '../Nav';
import Footer from '../Footer';

class Raja extends Component {

    render(){
        return(
            <div>
                <Nav/>
                <div className="raja-project">
                    <div className="header">
                        <div className="banner">
                            <div className="container">
                                <div className="wrap-banner-text">
                                    <div>Raja</div>
                                    <div>Strategic Proposal for Overseas Entry</div>
                                    <a href="http://www.raja.co.kr/">http://www.raja.co.kr/</a>
                                </div>
                            </div>
                        </div>
                        <div className="overview-wrap">
                            <div className="container">
                                <div className="ov-title">Overview</div>
                                <div className="ov-sub">이번 프로젝트를 통해 해외 전자상거래 플랫폼 아마존, 알리바바를 통해 친환경적인 종합가구회사 라자가구의 우드슬랩 제품들을 판매하는 것을 목표로 합니다. 해당 제안서에서는 플랫폼의 성향에 맞추어 B2B, B2C에 대한 방향과 판매 및 마케팅 방안의 제시하고자 합니다.</div>
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="container">
                                <div className="wrap-content">
                                    <div className="content">
                                        <div className="content-title">Target</div>
                                        <div className="content-sub">기업과 개인</div>
                                    </div>
                                    <div className="content">
                                        <div className="content-title">Goal</div>
                                        <div className="content-sub">해외 전자상거래 플랫폼을 통해 라자가구 우드슬랩을 판매한다.</div>
                                    </div>
                                    <div className="content">
                                        <div className="content-title">Concept</div>
                                        <div className="content-sub">자연 친환경적인 라자가구의 이미지에 맞게 분위기를 연상한다.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="interview-wrap">
                            <div className="container">
                                <div className="interview-title">Client Interview</div>
                                <div className="intetview-sub">라자가구 클라이언트와 만나 라자가구가 추구하는 가치와 현 웹사이트의 문제점을 파악했습니다.</div>
                            </div>
                            <div className="wrap-interview-content">
                                <div className="interview-img"></div>
                                <div className="interview-info">
                                    <div className="interview-info-item">1. 네비게이션의 깊이 편차가 많이 난다.</div>
                                    <div className="interview-info-item">2. 상품의 명칭이 정확하지 않다.</div>
                                    <div className="interview-info-item">3. 다른 제품에 같은 사진을 사용한다.</div>
                                    <div className="interview-info-item">4. 사용하지 않는 페이지가 존재한다.</div>
                                    <div className="interview-info-item">5. 이미지의 해상도가 떨어진다</div>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-wrap">
                            <div className="container">
                                <div className="keyword-title">Design Keyword</div>
                                <div className="keyword-sub">라자가구 클라이언트와의 인터뷰를 통해 단어 키워드를 도출하여 라자가구가 전달하고자 하는 이미지 방향의 키워드를 자연친화적/미니멀/트렌디 3가지로 정의하였습니다.</div>
                                <div className="wrap-keyword">
                                    <div className="circle-list">
                                        <div className="circle-content">
                                            <div className="circle">
                                                Nature-friendly
                                                <div className="circle-sub">자연친화적</div>
                                            </div>
                                        </div>
                                        <div className="circle-content">
                                            <div className="circle">
                                                Minimal
                                                <div className="circle-sub">미니멀</div>
                                            </div>
                                        </div>
                                        <div className="circle-content">
                                            <div className="circle">
                                                Trendy
                                                <div className="circle-sub">트렌디</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="circle-line"></hr>
                            <div className="design-wrap">
                                <div className="container">
                                    <div className="design-title">Colors</div>
                                    <div className="design-sub">
                                        친환경을 중요시하는 라자가구의 이미지에 걸맞게 숲을 연상시키는 Forest Green을 메인 컬러로 선정하고 초록색 계열인 메인컬러와 어울리게 Yellow Orange를 서브컬러로 선정했습니다.
                                    </div>
                                    <div className="design-colors">
                                        <div className="color">
                                            <span className="color-name">
                                                Forest Green<br/>
                                                <span className="color-code">#228B22</span>
                                            </span>
                                        </div>
                                        <div className="color">
                                            <span className="color-name">
                                                Beige<br/>
                                                <span className="color-code">#EFECEA</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="design-title">Font</div>
                                    <div className="font-name">Monteserratt</div>
                                    <div className="design-sub">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                    </div>
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
                                <div className="wrap-ui-top">
                                    <div className="top">
                                        <div className="top-title">RAJA UI</div>
                                        <div className="top-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    </div>
                                    <div className="top-box"></div>
                                </div>
                            </div>
                            <div className="view">
                                <div className="container">
                                    <div className="wrap-ui">
                                        <div className="view-img1"></div>
                                        <div className="view-img2"></div>
                                        <div className="view-img3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="web">
                            <div className="container">
                                <div className="top">
                                    <div className="top-title">RAJA WEB</div>
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



export default Raja;