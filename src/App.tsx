import React from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultView from './components/defaultView';
import ShowTalentOverview from './components/showTalent';
import ShowTalentListing from './components/showTalentListing';
import NavBar from './components/navbar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    

    <Router>
    <div className="App">
      <header className="App-header">

      <NavBar/>
        <Switch>
          <Route exact path="/" component={DefaultView} />
          <Route exact path="/talent-listings" component={ShowTalentOverview} />
          <Route exact path="/talent-joshua-pujol" component={ShowTalentListing} />
          
        </Switch>
      </header>
    </div>
  </Router>

  );
}

export default App;
