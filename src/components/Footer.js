import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logo"></div>
        <div className="info">
          <div className="social">
            <div className="fb"></div>
            <div className="insta"></div>
          </div>
          <div className="co_info">
            <div className="ceo">CEO Joohah Yoon</div>
            <div className="number">
              number of trader's registration 437-14-01421
            </div>
            <div className="address">MIRIMO 546, Hoam-ro, Gwanak-gu,&nbsp;</div>
            <div className="address">Seoul, Republic of Korea</div>
          </div>
        </div>

        <div className="policy">
          <a href="#">Terms of Use</a> <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
