import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";

import logo from './logo.svg';
import './App.css';
import DefaultView from './components/defaultView';
import ShowTalentOverview from './components/showTalent';
import ShowTalentListing from './components/showTalentListing';
import NavBar from './components/navbar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import data from './utils/data';

function App() {
  // const dispatch = useDispatch();
  
  useEffect(()=> {
    data.createMultisig('bc1qpvazd39yexehuuehfde360q7se7sgyzmecxedu', 'bc1qtn7e0e9pkcsfcupn5zj5dr798uetusqqly2p3e')
    // .then((data) => {

    // })
  })
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
