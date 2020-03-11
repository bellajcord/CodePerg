import React, { Component } from "react";


export default class Lang extends Component {
  
    render() {
        return (
          <div>
            <div className="home-container">
              <div>
                <h1 className="home-header">Code Pergatory</h1>
              </div>
              <div>
                <h2 className="home-header2">What do you want to learn today?</h2>
              </div>
              <div>
                <a href="/Javascript">
                  <button className="btn-router">JavaScript</button>
                </a>
                <a href="/Libraries">
                    <button className="btn-router">HTML</button>
                </a>
                <a href="/API">
                    <button className="btn-router">CSS</button>
                </a>
              </div>
            </div>
            <div className="footer"></div>
          </div>
        );
      }
}
