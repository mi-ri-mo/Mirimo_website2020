import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          className="logo"
        ></img>
        <div>
          <div className="ceo">CEO Joohah Yoon</div>
          <div className="number">
            number of trader's registration 437-14-01421
          </div>
          <div className="address">
            MIRIMO 546, Hoam-ro, Gwanak-gu, Seoul, Republic of Korea
          </div>
        </div>
        <div className="policy">
          <a href="#">Terms of Use</a> <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="social">
        <img src="src/resource/img/footer_facebook_logo.png"></img>
      </div>
    </div>
  );
};

export default Footer;
