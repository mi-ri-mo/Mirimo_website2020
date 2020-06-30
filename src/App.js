import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import NoMatch from './components/NoMatch';
import Raja from './components/projects/Raja';
import JHsustain from './components/projects/JHsustain';
import eightGram from './components/projects/8gram';
import MirimMediaLab from './components/projects/MirimMediaLab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact={true} path="/" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Project" component={Project}/>
            <Route path="/Raja" component={Raja}/>
            <Route path="/JHsustain" component={JHsustain}/>
            <Route path="/8gram" component={eightGram}/>
            <Route path="/MirimMediaLab" component={MirimMediaLab}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
