/* eslint-disable jsx-a11y/alt-text */
// will contain nav bar, and level selector buttons that route to subjects
import React, { Component } from "react";
import '../assets/bootstrap/css/bootstrap.min.css'
import Background from '../assets/img/masthead.jpg'



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

      <header className="masthead" style={{  
        backgroundImage: "url(masthead.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
     
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-lead-in'>
                <h1>Welcome To Code Pergatory.</h1>
            </div>
            <div className="intro-heading text-uppercase">
            </div>
          </div>
        </div>
      </header>
    
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright© codePerg 2020</span>
            </div>
          </div>
        </div>
      </footer>

</div>


       
    );
  }
}