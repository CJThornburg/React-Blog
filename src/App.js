import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from './About';
import Creater from './Creater'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout} from './components/Layout';



function App() {
  return (<Router>
    <div className="App">
    <Nav />
    <Layout>
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/creater" component={Creater} />
    </Switch>
    </Layout>
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
