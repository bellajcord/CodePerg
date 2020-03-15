import React, { Component } from 'react';
import axios from 'axios';
import {VideoList} from './Language/lang-list-component'
import {SearchBox} from './Search-box'


export default class Languages extends Component {
  
state = {
      langVideos: [],
      searchField: '',
      langVideo: {
        name:"",
        link: "",
        description: "",
        language: "",
      },
      newLVideo: {
        name: "",
        link: "",
        description: "",
        language: "",
      }
    };
  

  componentDidMount = () => {
    axios.get('/api/language').then(res => {
        this.setState({langVideos: res.data})
    })
  }

  handleChange = (e) => {
   this.setState({ searchField: e.target.value});
  }
  
  handleNewFormChange = event => {
    const attribute = event.target.name
    const newLVideo = {...this.state.newLVideo}
    newLVideo[attribute] = event.target.value
    this.setState({newLVideo: newLVideo})
    
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/language", this.state.newLVideo).then(()=>{
      this.setState({
        newLVideo: {
          name: "",
          link:"",
          description: "",
          language: ""
        }
      });
    });
    this.componentDidMount()
  }
  
  render() {
  //  const {langVideos, searchField} = this.state;
  //  const filteredVideos = langVideos.filter( langVideo => 
  //    langVideo.name.toLowerCase().includes(searchField.toLowerCase())
  //    );

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

      <div className='video-display' >
      <h1>Language Videos</h1>
      <br/>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
            <br/>
      <hr/>
      <br/>
        <VideoList langVideos={this.state.langVideos}></VideoList>
        <section className="add-new-form">
        <form onSubmit={this.handleSubmit} >
          <label className='newform-label'>New Video</label>
            <br/>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleNewFormChange}
              />
              <br/>
          <label>Description</label>     
            <input  
              type='text'
              name='description'
              onChange={this.handleNewFormChange}
              />
              <br/>
            <label>Language</label>
            <input
              type='text'
              name='language'
              onChange={this.handleNewFormChange}
              />
              <br/>
            <label>Link</label>
            <input
              type="text"
              name="link"
              onChange={this.handleNewFormChange}
              />
              <br/>
              <br/>
              <input className="new-video-button" type="submit" value="Add New Video"/>   
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
    )
  }
}
