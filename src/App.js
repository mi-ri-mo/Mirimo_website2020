import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/Project" component={Project}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
