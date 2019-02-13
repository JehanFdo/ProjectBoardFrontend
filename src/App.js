import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route } from "react-router-dom";
import ProjectBoard from './components/ProjectBoard';
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import {Provider} from "react-redux";//to Set The Store
import store from "./store";  

class App extends Component {
  render() {
    return (
      //Provider is what defines store
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <Route exact path="/" component={ProjectBoard} ></Route>
            <Route  path="/addProjectTask" component={AddProjectTask} ></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
