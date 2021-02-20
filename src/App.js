import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

class App extends Component{
  render(){
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
