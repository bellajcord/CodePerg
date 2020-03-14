import React, { Component } from 'react';
import axios from 'axios';
import {VideoList} from './Api/api-list-component';
import {SearchBox} from './Search-box';


export default class Apis extends Component {
  

    state = {
      apiVideos: [],
      searchField: '',
      apiVideo: {
        title: "",
        link: "",
        description: "",
        topic: "",
      },
      newVideo: {
        title: "",
        link: "",
        description: "",
        topic: "",
      }
      
    };
  

  componentDidMount = () => {
    axios.get('/api/apivideo').then(res => {
        this.setState({apiVideos: res.data})
    })
  }

  

 handleChange = (e) => {
   this.setState({ searchField: e.target.value});
 };


  handleNewFormChange = (event) => {
    const attribute = event.target.name
    const newVideo = { ...this.state.newVideo }
    newVideo[attribute] = event.target.value
    this.setState({ newVideo: newVideo })
  }

  //form
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/apivideo", this.state.newVideo).then(()=>{
      this.setState({
        newVideo: {
          title:"",
          link:"",
          description: "",
          topic:"",
        }
      });
    });
    this.componentDidMount()
    
  }
  
  render() {
    const {apiVideos, searchField} = this.state;
    const filteredVideos = apiVideos.filter( apiVideo => 
      apiVideo.title.toLowerCase().includes(searchField.toLowerCase())
      );

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
      <h1>Api Videos</h1>
      <br/>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
      <br/>
      <hr/>
      <br/>
        <VideoList apiVideos={filteredVideos}></VideoList>
     <section className="add-new-form">
         <form onSubmit={this.handleSubmit} >
           <label className='newform-label'>New Video</label>
           <br/>
           <label>Title</label>
           <input
             type="text"
             name="title"
             onChange={this.handleNewFormChange}
             //value= {this.state.newVideo.title}
             />
             <br/>
             <label>Description</label>
             <input  
               type="text"
               name="description"
               onChange={this.handleNewFormChange}
               //value= {this.state.newVideo.description}
               />
               <br/>
               <label>Topic</label>
               <input  
               type="text"
               name="topic"
               onChange={this.handleNewFormChange}
               //value= {this.state.newVideo.topic}
               />
               <br/>
               <label>Link</label>
               <input  
               type="text"
               name="link"
               onChange={this.handleNewFormChange}
               //value= {this.state.newVideo.link}
              />
              <br/>
              <br/>
              <input className="new-video-button" type="submit" value="Add New Video" />
         </form>
      </section>

      </div>
      </div>
    )
  }
}
