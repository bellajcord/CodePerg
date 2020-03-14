import React, { Component } from "react";
import axios from "axios";
import { VideoList } from "./Libraries/lib-list-component";
import { SearchBox } from "./Search-box";

export default class Libraries extends Component {
  state = {
    libVideos: [],
    searchField: "",
    libVideo: {
      title: "",
      link: "",
      description: "",
      library: ""
    },
    newVideo: {
      title: "",
      link: "",
      description: "",
      library: ""
    }
  };

  componentDidMount = () => {
    axios.get("/api/libraries").then(res => {
      this.setState({ libVideos: res.data });
    });
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  handleNewFormChange = event => {
    const attribute = event.target.name;
    const newVideo = { ...this.state.newVideo };
    newVideo[attribute] = event.target.value;
    this.setState({ newVideo: newVideo });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/libraries", this.state.newVideo).then(() => {
      this.setState({
        newVideo: {
          title: "",
          link: "",
          description: "",
          topic: ""
        }
      });
    });
    this.componentDidMount();
  };

  deleteButtonAction = () => {
    axios.delete(
      `/api/libraries/${this.state.match.params.libVideoId}`,
      this.state.libVideos
    );

    this.componentDidMount();
  };

  render() {
    const { libVideos, searchField } = this.state;
    const filteredVideos = libVideos.filter(libVideo =>
      libVideo.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <nav
          id="mainNav"
          className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              codePerg
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              data-target="#navbarResponsive"
              data-toggle="collapse"
              type="button"
              data-toggle="collapse"
              aria-controls="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div id="navbarResponsive" className="collapse navbar-collapse">
              <ul className="nav navbar-nav ml-auto text-uppercase">
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/Libraries">
                    Libraries
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/Languages">
                    Languages
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/Apis">
                    API's
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="video-display">
          <h1>Library Videos</h1>
          <br />
          <SearchBox
            placeholder="search videos"
            hanldeChange={this.handleChange}
          />
          <br />
          <hr />
          <br />
          <VideoList libVideos={filteredVideos}></VideoList>
          <section className="add-new-form">
            <form onSubmit={this.handleSubmit}>
              <label className="newform-label">New Video</label>
              <br />
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={this.handleNewFormChange}
                //value= {this.state.newVideo.title}
              />
              <br />
              <label>Description</label>
              <input
                type="text"
                name="description"
                onChange={this.handleNewFormChange}
                //value= {this.state.newVideo.description}
              />
              <br />
              <label>Library</label>
              <input
                type="text"
                name="library"
                onChange={this.handleNewFormChange}
                //value= {this.state.newVideo.topic}
              />
              <br />
              <label>Link</label>
              <input
                type="text"
                name="link"
                onChange={this.handleNewFormChange}
                //value= {this.state.newVideo.link}
              />
              <br />
              <br />
              <input
                className="new-video-button"
                type="submit"
                value="Add New Video"
              />
            </form>
          </section>

          <footer>
            <section className="secondary-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <span className="copyright">Copyright© codePerg 2020</span>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </div>
    );
  }
}
