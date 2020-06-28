import React from 'react';
import '../styles/Contact.scss';
import MirimoMap from './GoogleMap';

import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div class="info">
          <div class="title">GET IN TOUCH</div>
          <div class="content">
            Office
            <div>+82-2-888-8350</div>
          </div>
          <div class="content">
            Fax
            <div>+82-2-888-8350</div>
          </div>
          <div class="content"></div>
          <div class="content">
            Email
            <div>mirimo01212@gmail.com</div>
          </div>
        </div>

        <div class="direction">
          <div class="title">DIRECTION</div>
          <div class="content">
            546, Hoam-ro, Gwanak-gu, Seoul, Republic of Korea
          </div>
          <MirimoMap class="map"></MirimoMap>
        </div>

        <div class="contact">
          <div class="title">CONTACT US</div>
          <div class="content"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
