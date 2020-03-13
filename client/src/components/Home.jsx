// will contain nav bar, and level selector buttons that route to subjects
import React, { Component } from "react";
import '../assets/bootstrap/css/bootstrap.min.css'

export default class Home extends Component {
  render() {
    return (
      <div>
      <nav id="mainNav" className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">codePerg</a>
          <button className="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" data-toggle="collapse" type="button" data-toggle="collapse" aria-controls="false" aria-label="Toggle navigation" >
            <i className="fa fa-bars"></i>
          </button>
          <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto text-uppercase">
              <li className="nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="/Libraries">Libraries</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="/Languages">Languages</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="/Apis">API's</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    
        <div className="home-container">
          <div>
            <h1 className="home-header">Code Pergatory</h1>
          
            <h2 className="home-header2">What do you want to learn today?</h2>
          </div>
          <div>
            <a href="/Languages">
              <button className="btn-router">Language</button>
            </a>
            <a href="/Libraries">
                <button className="btn-router">Libraries</button>
            </a>
            <a href="/Apis">
                <button className="btn-router">API's</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}