import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Feature from './components/Feature';
import Navbar1 from './components/Navbar1';
import Encryption from './components/Encryption';
import Text from './components/Text';
import Textdec from './components/Textdec';


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
        <Route exact path="/encryption">
          <Navbar1/>
          <Encryption/>
        </Route>
        <Route exact path="/encrypt_text">
          <Navbar1/>
          <Text/>
        </Route>
        <Route exact path="/decrypt_text">
          <Navbar1/>
          <Textdec/>
        </Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;
