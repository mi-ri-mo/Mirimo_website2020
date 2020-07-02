import React, { Component } from 'react';
import '../styles/Contact.scss';
import MapContainer from './GoogleMap';

import Nav from './Nav';
import Footer from './Footer';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  callAPI() {
    fetch('http://localhost:3002/contact')
      .then((res) => res.text())
      .then((res) => this.setState({ email: '', subject: '', message: '' }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <Nav className="contact_nav" />
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
            <div class="map">
              <MapContainer />
            </div>
          </div>

          <div className="contact">
            <div className="title">CONTACT US</div>
            <div className="content">
              <form method="post" action="/contact/send">
                <div className="email">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="example@gmail.com"
                    required
                  ></input>
                </div>
                <hr></hr>
                <div className="subject">
                  Subject
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={this.handleChange}
                    placeholder="Please write the title"
                    required
                  ></input>
                </div>
                <hr></hr>
                <div className="message">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    onChange={this.handleChange}
                    placeholder="Detailed information on project content, schedule, etc"
                    required
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
