import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from './About';
import Creater from './Creater'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (<Router>
    <div className="App">
    <Nav />
    <Switch>
    //when it finds the route with a specific path that is the only thing it renders

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/creater" component={Creater} />
    </Switch>
    </div>
    </Router>
  );
}




// This is like adding abother component page
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
