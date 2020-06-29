import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import NoMatch from './components/NoMatch';

class App extends Component {
  componentDidMount() {
    // 프록시로 등록한 서버주소가 생략됨
    fetch('http://localhost:3002/contact')
      .then((res) => res.json())
      // json형식으로 받아온 값을 setState를 이용해 값을 재설정해줌
      .then((contact) => this.setState({ contact }));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact={true} path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Project" component={Project} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
