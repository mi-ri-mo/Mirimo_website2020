import React, {Component} from 'react';
import '../../styles/projects/MirimMediaLab.scss';

import Nav from '../Nav';
import Footer from '../Footer';

class MirimMediaLab extends Component {

    render(){
        return(
            <div>
                <Nav/>
                <div className="project">
                    <div className="header">
                        <div className="banner">
                            <div className="container">
                                <img src={process.env.PUBLIC_URL + './img/mirimo-logo2-w.png'} alt="mirimo logo"></img><br/>
                                MIRIM MEDIA LAB<br/>
                                <span>2020학년도 아세안 직업교육협력 콘텐츠 제작</span>
                            </div>
                        </div>
                        <div className="overview-wrap">
                            <div className="container">
                                <div className="ov-title">Overview</div>
                                <div className="ov-sub">미림미디어랩과 함께 코로나19 전염병 확산으로 인한 출장 지연 및 중단에 대한 대응, 그리고 직업교육 협력의 지속성 확보 및 성과 확대를 위한 2020학년도 아세한 직업교육협력 콘텐츠를 제작에 참여하였습니다.<br/> 또한 원격교육 운영에 대한 교원의 인식 제고를 목표로 전문적 역량을 함양한 인재들과 함께 코로나19 이후 아세안 직업교육 협력을 위한 원격 운영 기반을 조성해나가고자 합니다.</div>
                                <img className="ov-img" src={process.env.PUBLIC_URL + './img/mml-logo.png'} alt="company logo" />
                            </div>
                        </div>
                        <div className="goal-wrap">
                            <div className="container">
                                <div className="goal-title">Project Goal</div>
                                <div className="contents">
                                    <div className="content"></div>
                                    <div className="content"></div>
                                    <div className="content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="process-wrap">
                            <div className="container">
                                <div className="process-title">Project Process</div>
                                <div className="process-details">
                                    <div className="detail-wrap">
                                        <div className="detail-num">1</div>
                                        <span className="detail-txt">교육 컨텐츠 기획/섭외/촬영</span>
                                    </div>
                                    <div className="detail-wrap">
                                        <div className="detail-num">2</div>
                                        <span className="detail-txt">스토리보드 검토</span>
                                    </div>
                                    <div className="detail-wrap">
                                        <div className="detail-num">3</div>
                                        <span className="detail-txt">디자인 가이드 작성</span>
                                    </div>
                                    <div className="detail-wrap">
                                        <div className="detail-num">4</div>
                                        <span className="detail-txt">영상 그래픽 소스 작업</span>
                                    </div>
                                    <div className="detail-wrap">
                                        <div className="detail-num">5</div>
                                        <span className="detail-txt">소스 삽입 작업</span>
                                    </div>
                                    <div className="detail-wrap">
                                        <div className="detail-num">6</div>
                                        <span className="detail-txt">결과물 도출</span>
                                    </div>
                                </div>
                                <div className="process-imgs">
                                    <div className="img"></div>
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="contents-wrap">
                            <div className="container">
                                <div className="content-title">Contents</div>
                                <div className="content-sub">국가별 상황에 따라 학생의 특성에 맞는 원격수업 운영 계획을 세워<br/> 다양한 디지털 기술을 활용하여 상호작용의 효과를 높이며, 향후 지속적으로 활용할 수 있는 양질의 컨텐츠를 개발합니다.</div>
                                <div className="content-imgs">
                                    <div className="img"></div>
                                    <div className="img"></div>
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foo">
                        <img src={process.env.PUBLIC_URL + './img/mirimo_mirimo_logo.png'} alt="mirimo logo"></img>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}



export default MirimMediaLab;