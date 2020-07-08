import React, {Component} from 'react';
import '../../styles/projects/Raja.scss';

import Nav from '../Nav';
import Footer from '../Footer';

import Font1 from '../../resource/img/raja/raja-ui.png';
import Font2 from '../../resource/img/raja/raja-ui.png';
import Font3 from '../../resource/img/raja/raja-ui.png';
import Font4 from '../../resource/img/raja/raja-ui.png';

import UI1 from '../../resource/img/raja/raja-ui-1.png';
import UI2 from '../../resource/img/raja/raja-ui-2.png';
import UI3 from '../../resource/img/raja/raja-ui-3.png';

class Raja extends Component {

    render(){
        return(
            <div>
                <Nav/>
                <div className="raja-project">
                    <div className="raja-header">
                        <div className="wrap-header-text">
                            <div className="header-title">RAJA</div>
                            <div className="header-title">Strategic Proposal for Overseas Entry</div>
                            <div className="header-link">https://plus-ex.com/experience#29cm3</div>
                        </div>
                    </div>
                    <div className="raja-overview">
                        <div className="overview-title">Overview</div>
                        <div className="overview-content">
                            이번 프로젝트를 통해 해외 전자상거래 플랫폼 아마존, 알리바바를 통해 친환경적인 종합가구회사
                            라자가구의 우드슬랩 제품들을 판매하는 것을 목표로 합니다. 해당 제안서에서는 플랫폼의 성향에 맞추어
                            B2B, B2C에 대한 방향과 판매 및 마케팅 방안을 제시하고자 합니다.
                        </div>
                    </div>
                    <div className="raja-content">
                        <div className="content-item">
                            <div className="item-title">Target</div>
                            <div className="item-content">
                                기업과 개인
                            </div>
                        </div>

                        <div className="content-item">
                            <div className="item-title">Goal</div>
                            <div className="item-content">
                                해외 전자상거래 플랫폼을 통해 라자가구 우드슬랩을 판매한다.
                            </div>
                        </div>

                        <div className="content-item">
                            <div className="item-title">Concept</div>
                            <div className="item-content">
                                자연친화적인 라자가구의 이미지에 맞게 분위기를 연상한다.
                            </div>
                        </div>
                    </div>
                    <div className="raja-client-interview">
                        <div className="ci-title">Client Interview</div>
                        <div className="ci-content">
                            라자가구의 클라이언트와 만나 라자가구가 추구하는 가치와 현 웹사이트의 문제점을 파악했습니다.
                        </div>
                        <div className="wrap-ci">
                            <div className="ci-web-before"></div>
                            <div className="ci-list">
                                <div className="ci-li">1 네비게이션의 깊이 편차가 많이 난다.</div>
                                <div className="ci-li">2 상품의 명칭이 정확하지 않다</div>
                                <div className="ci-li">3 다른 제품에 같은 사진을 사용한다.</div>
                                <div className="ci-li">4 사용되지 않는 페이지가 존재한다</div>
                                <div className="ci-li">5 이미지의 해상도가 떨어진다</div>
                            </div>
                        </div>
                    </div>
                    <div className="raja-design-key">
                        <div className="dk-title">Design Keyword</div>
                        <div className="dk-content">
                            라자가구 기존 웹 페이지 분석을 통해 단어 키워드를 도출하여
                            라자가구가 전달하고자 하는 이미지 방향의 키워드를
                            자연친화적인/미니멀/트렌디 3가지로 정하였습니다.
                        </div>
                        <div className="wrap-dk">
                            <div className="dk-item">
                                <div className="item-eng">Nature-friendly</div>
                                <div className="item-kor">자연친화적</div>
                            </div>
                            <div className="dk-item">
                                <div className="item-eng">Minimal</div>
                                <div className="item-kor">미니멀</div>
                            </div>
                            <div className="dk-item">
                                <div className="item-eng">Trendy</div>
                                <div className="item-kor">트렌디</div>
                            </div>
                            <div className="dk-border"></div>
                        </div>
                    </div>
                    <div className="raja-color">
                        <div className="color-title">Colors</div>
                        <div className="color-content">
                            친환경을 중요시하는 라자가구의 이미지에 걸맞게 숲을 연상시키는 Forest Green을
                            메인 컬러로 선정하고 초록색 계열인 메인컬러와 어울리게 Beige를 서브컬러로
                            선정했습니다.
                        </div>
                        <div className="wrap-color">
                            <div className="color-item forest-green">
                                <div className="color-name">Forest Green</div>
                                <div className="color-code">#228B22</div>
                            </div>
                            <div className="color-item beige">
                                <div className="color-name">Beige</div>
                                <div className="color-code">#EFECEA</div>
                            </div>
                        </div>
                    </div>
                    <div className="raja-font">
                        <div className="font-title">Font</div>
                        <div className="font-name">Monteserrat</div>
                        <div className="font-ipsum">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                        </div>
                        <div className="wrap-font">
                            <div className="font-item" style={{backgroundImage: `url(${Font1})`}}></div>
                            <div className="font-item" style={{backgroundImage: `url(${Font2})`}}></div>
                            <div className="font-item" style={{backgroundImage: `url(${Font3})`}}></div>
                            <div className="font-item" style={{backgroundImage: `url(${Font4})`}}></div>
                        </div>

                    </div>
                    <div className="raja-ui-top">
                        <div className="wrap-ui">
                            <div className="wrap-text">
                                <div className="ui-title">RAJA UI</div>
                                <div className="ui-content">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                                </div>
                            </div>
                            <div className="ui-mobile"></div>
                        </div>
                    </div>
                    <div className="raja-ui-bottom">
                        <div className="ui-item" style={{backgroundImage: `url(${UI1})`}}></div>
                        <div className="ui-item" style={{backgroundImage: `url(${UI2})`}}></div>
                        <div className="ui-item" style={{backgroundImage: `url(${UI3})`}}></div>
                    </div>
                    <div className="raja-web">
                        <div className="web-title">RAJA WEB</div>
                        <div className="web-ui"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}



export default Raja;