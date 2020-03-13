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
      newVideo: {
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
  
  handleNewFormChange = (event) => {
    const attribute = event.target.name
    const newVideo = {...this.state.newVideo}
    newVideo[attribute] = event.target.value
    this.setState({newVideo: newVideo})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/language", this.state.newVideo).then(()=>{
      this.setState({
        newVideo: {
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
   const {langVideos, searchField} = this.state;
   const filteredVideos = langVideos.filter( langVideo => 
     langVideo.name.toLowerCase().includes(searchField.toLowerCase())
     );

    return (
      <div className='video-display' >
      <h1>Language Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList langVideos={filteredVideos}></VideoList>
        
        <form onSubmit={this.handleSubmit} >
          <label>New Video</label>
            <br/>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleNewFormChange}
              />
          <label>Description</label>     
            <input  
              type='text'
              name='description'
              onChange={this.handleNewFormChange}
              />
            <label>Language</label>
            <input
              type='text'
              name='language'
              onChange={this.handleNewFormChange}
              />
            <label>Link</label>
            <input
              type="text"
              name="link"
              onChange={this.handleNewFormChange}
              />
              <input type="submit" value="Add New Video"/>   
        </form>
      </div>
    )
  }
}
