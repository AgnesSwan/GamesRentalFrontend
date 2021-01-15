import React, { Component } from 'react';
import './App.css';
import Games from './component/Games';
import Topbar from './component/Topbar';

export default class App extends Component {


  render() {
    return (

      <div className="app" >
        <Topbar />
        <Games />
      </div>
    )
  }

}