import React, { Component } from 'react';
import './App.css';
import Games from './component/Games';
import Topbar from './component/Topbar';
import { Route, Switch } from 'react-router-dom';
import Register from './component/Register';
import Signin from './component/Signin';

export default class App extends Component {


  render() {
    return (

      <div className="app" >
        <Topbar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/signin" component={Signin} />

          <Route exact path="/userregistration" component={Register} />
        </Switch>

      </div>
    )
  }

}