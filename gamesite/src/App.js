import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Games from './components/Games/Games';
import Game from './components/Games/Game';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>

        <div className="gamesection">
          <Navbar message="Register" />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gamelist" component={Games} />
          <Route exact path="/game/:id" component={Game} />
        </div>
      </Router>
    </Fragment>
  );

}

export default App;
