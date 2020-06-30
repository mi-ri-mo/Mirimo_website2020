import React, { Component } from 'react';
import '../styles/Contact.scss';
import MapContainer from './GoogleMap';

import Nav from './Nav';
import Footer from './Footer';

class Contact extends Component {
  callAPI() {
    fetch('http://localhost:3002/contact')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
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
            <div
              style={{ height: '70vh', width: '100%', position: 'relative' }}
            >
              <MapContainer />
            </div>
          </div>

          <div className="contact">
            <div className="title">CONTACT US</div>
            <div className="content">
              <form method="post" action="/contact">
                <div className="email">
                  Email
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  ></input>
                </div>
                <hr></hr>
                <div className="subject">
                  Subject
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Please write the title"
                  ></input>
                </div>
                <hr></hr>
                <div className="message">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Detailed information on project content, schedule, etc"
                  ></textarea>
                </div>
                <input className="send" type="submit" value="SEND"></input>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
