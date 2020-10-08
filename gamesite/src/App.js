import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Games from './components/Games/Games';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/game" component={Games} />
        </div>
      </Router>
    </Fragment>
  );

}

export default App;
