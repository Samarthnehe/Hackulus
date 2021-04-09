import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Feature from './components/Feature';
import Navbar1 from './components/Navbar1';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/">
           <Navbar/>
           <Home/>
        </Route>

        <Route exact path="/about">
           <Navbar/>
        
        </Route>

        <Route exact path="/features">
           <Navbar1/>
          <Feature/>
        </Route>
        
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;
