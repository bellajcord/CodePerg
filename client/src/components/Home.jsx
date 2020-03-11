// will contain nav bar, and level selector buttons that route to subjects
import React, { Component } from "react";

export default class Home extends Component {
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
            <a href="./Languages">
              <button className="btn-router">Language</button>
            </a>
            <a href="/Libraries">
                <button className="btn-router">Libraries</button>
            </a>
            <a href="/API">
                <button className="btn-router">API's</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}