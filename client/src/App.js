import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx';
import Languages from './components/Languages';
import Apis from './components/Apis';
import Libraries from './components/Libraries'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Languages" component={Languages}/>
          <Route exact path="/Apis" component={Apis}/>
          <Route exact path="/Libraries" component={Libraries}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
