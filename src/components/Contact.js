import React, { Component } from 'react';
import '../styles/Contact.scss';
import MapContainer from './GoogleMap';

import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="info">
          <div className="title">GET IN TOUCH</div>
          <div className="content">
            Office
            <div>+82-2-888-8350</div>
          </div>
          <div className="content">
            Fax
            <div>+82-2-888-8350</div>
          </div>
          <div className="content"></div>
          <div className="content">
            Email
            <div>mirimo01212@gmail.com</div>
          </div>
        </div>

        <div className="direction">
          <div className="title">DIRECTION</div>
          <div className="content">
            546, Hoam-ro, Gwanak-gu, Seoul, Republic of Korea
          </div>
          <div style={{ height: '70vh', width: '100%', position: 'relative' }}>
            <MapContainer />
          </div>
        </div>

        <div className="contact">
          <div className="title">CONTACT US</div>
          <div className="content">
            <form method="post" action="">
              <div className="email">
                Email
                <input
                  size="85"
                  type="text"
                  name="email"
                  placeholder="example@gmail.com"
                ></input>
              </div>
              <hr></hr>
              <div className="subject">
                Subject
                <input
                  size="85"
                  type="text"
                  name="subject"
                  placeholder="Please write the title"
                ></input>
              </div>
              <hr></hr>
              <div className="message">
                Message
                <input
                  size="85"
                  type="text"
                  name="message"
                  placeholder="Detailed information on project content, schedule, etc"
                ></input>
              </div>
              <input className="send" type="submit" value="SEND"></input>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
