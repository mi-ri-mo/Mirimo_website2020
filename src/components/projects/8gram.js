import React, {Component} from 'react';
import '../../styles/projects/8gram.scss';

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
                                <div className="ov-title">Over view</div>
                                <div className="ov-sub">반지카페 8그램은 행복한 추억과 예쁜 반지를 직접 만드는 반지공방 카페입니다. 현재 많은 고객들이 <br/>인터넷으로 유입되는 경우가 많아 PC뿐만 아니라 모바일 웹사이트까지 제작하게 되었습니다. 브랜드 분석과 <br/>전략을 수립하였고 이를 통해 컬러, 폰트, 이미지를 도출하여 일관된 반지카페 8그램의 모습을 나타냈습니다. <br/>반지카페 8그램의 가치와 웹사이트를 홍보하고자, 반응형 웹사이트를 구축하였습니다.</div>
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="container">
                                <div className="content">
                                    <span className="content-title">Target</span>
                                    <div className="content-sub">주 타겟층은 10-20대로, 우정링, 커플링을 <br/>만들기 위해 반지카페 8그램에 찾아옵니다.</div>
                                </div>
                                <div className="content">
                                    <span className="content-title">Goal</span>
                                    <div className="content-sub">고객에게 감성적인 반응형 웹사이트를 제공하고 <br/>홍보하고자 하는 목표를 설정하였습니다.</div>
                                </div>
                                <div className="content">
                                    <span className="content-title">Concept</span>
                                    <div className="content-sub">베이직 컬러를 사용하여 공방 분위기를 <br/>자연스레 연상시킵니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="interview-wrap">
                            <div className="container">
                                <div className="interview-title">Client Interview</div>
                                <div className="intetview-sub">8gram 클라이언트와 만나 8gram이 추구하는 가치와 현 웹사이트의 문제점을 <br/>파악했습니다.</div>
                            </div>
                            <div className="interview-img"></div>
                            <div className="interview-info">
                                1 현 웹사이트의 정보가 방대함<br/>
                                2 정리되어 있지 않은 네비게이션<br/>
                                3 반지카페의 8그램의 무드와 부적합<br/>
                                4 통일성 없는 사진<br/>
                            </div>
                        </div>
                        <div className="keyword-wrap">
                            <div className="container">
                                <div className="keyword-title">Design Keyword</div>
                                <div className="keyword-sub">반지카페 8gram 클라이언트와의 인터뷰를 통해 단어 키워드를 <br/>도출하여 반지카페 8gram이 전달하고자 하는 이미지 방향의 <br/>키워드를 감성적 / 추억가득한 / 즐거움 3가지로 정의하였습니다.</div>
                                <div className="circle-list">
                                    <div className="circle-content">
                                        <div className="circle">
                                            Dream
                                            <div className="circle-sub">추억가득한</div>
                                        </div>
                                    </div>
                                    <div className="circle-content">
                                        <div className="circle">
                                            sensitive
                                            <div className="circle-sub">감성적</div>
                                        </div>
                                    </div>
                                    <div className="circle-content">
                                        <div className="circle">
                                            enjoyable
                                            <div className="circle-sub">즐거운</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="circle-line"></hr>
                            <div className="design-wrap">
                                <div className="container">
                                    <div className="design-title">Colors</div>
                                    <div className="design-sub">반지카페 8그램의 공방 색상과 비슷한 베이지 계열 컬러를 도출하였습니다. 포인트 컬러는 <br/>브라운 컬러, 전체 컬러는 아이보리 컬러로 하여 은은한 분위기를 연출했습니다.</div>
                                    <div className="design-colors">
                                        <div className="color">
                                            <span className="color-name">
                                                Brown<br/>
                                                <span className="color-code">#564e4b</span>
                                            </span>
                                        </div>
                                        <div className="color">
                                            <span className="color-name">
                                                Ivory<br/>
                                                <span className="color-code">#e8e5de</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="design-title">Font</div>
                                    <div className="font-name">Noto Sans</div>
                                    <div className="design-sub">노토산스는 가독성이 뛰어나 제목용 서체, 본문용 서체에 사용하였습니다.<br/>본문용 서체는 국문, 영문, 한자, 숫자가 무리 없이 혼용되고 가독성이 높은<br/>노토산스를 활용합니다.</div>
                                    <div className="design-fonts">
                                        <div className="font">
                                            <span className="font-weight1">Black</span>
                                            <span className="font-weight2">Medium</span>
                                            <span className="font-weight3">Regular</span>
                                            <span className="font-weight4">Light</span>
                                        </div>
                                    </div>
                                    <div className="font-name">Cherolina</div>
                                    <div className="design-sub">스크립트 서체를 사용하여 부드럽고 우아한 분위기를 연출하고자 하였습니다.<br/>손수 반지를 만드는 반지카페 8그램의 모습과 닮은 서체를 사용하였습니다.</div>
                                    <div className="font-name">Regular</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui">
                            <div className="container">
                                <div className="top">
                                    <div className="top-title">8gram UI</div>
                                    <div className="top-sub">반지카페 8그램이 드러내고자 하는 모습을 최대한 반응형 웹사이트에 담았습니다.<br/>불필요한 네비게이션 바를 제거하고 통일감 있는 사진을 넣어 전체 웹사이트와 UI를<br/>일관성있게 하였습니다. 반지카페 8그램 공방이 전체적으로 베이지 계열 컬러와 화이트<br/>컬러를 많아, UI에도 베이지&화이트 컬러를 사용하여 마치 공방에 있는 듯한 느낌을<br/>자아내었습니다.</div>
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