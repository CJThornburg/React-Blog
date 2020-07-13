import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from './About';
import Creater from './Creater'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout} from './components/Layout';
import Home from "./Home";
import Post from "./Post";



function App() {
  return (<Router>
    <div className="App">
    <Nav />
    <Layout>
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/creater" component={Creater} />
    <Route path="/post" component={Post} />
    </Switch>
    </Layout>
    </div>
    </Router>
  );
}






export default App;
