import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";

import logo from './logo.svg';
import './App.css';
import DefaultView from './components/defaultView';
import data from './utils/data';

function App() {
  // const dispatch = useDispatch();
  
  useEffect(()=> {
    data.createAccount('bc1qp0x5nxjlaytwdusk36svx94qlg3hrlwcksd7sh','dillon', 'peanutpongpong', 'dill_eth', 'dilloncortez.com').then((data) => {

    })
  })
  return (
    <DefaultView/>
  );
}

export default App;
