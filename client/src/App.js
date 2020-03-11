import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx';
import Lang from './components/Languages'
import JavaScripts from './components/Language/Javascript/js-list-component';
import newJs from './components/Language/Javascript/js-add-form'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Languages" component={Lang}/>
          <Route exact path="/Javascript" component={JavaScripts}/>
          <Route exact path="/NewJS" component={newJs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
