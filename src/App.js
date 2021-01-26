import React, { Component } from 'react';
import './App.css';
import Games from './component/Games';
import Topbar from './component/Topbar';
import { Route, Switch } from 'react-router-dom';


export default class App extends Component {


  render() {
    return (

      <div className="app" >
        <Topbar />
        <Switch>
          <Route exact path="/" component={Games} />



        </Switch>

      </div>
    )
  }

}