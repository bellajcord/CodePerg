import React, { Component } from 'react';
import axios from 'axios';
import {VideoList} from './Libraries/lib-list-component'
import {SearchBox} from './Search-box'


export default class Libraries extends Component {
  
state = {
      libVideos: [],
      searchField: '',
      libVideo: {
        title: '',
        link: '',
        description: '',
        library:'',
      },
      newVideo: {
        title: '',
        link:'',
        description:'',
        library:'',
      }
    };
  

  componentDidMount = () => {
    axios.get('/api/libraries').then(res => {
        this.setState({libVideos: res.data})
    })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  handleNewFormChange = (event) => {
    const attribute = event.target.name
    const newVideo = { ...this.state.newVideo }
    newVideo[attribute] = event.target.value
    this.setState({ newVideo: newVideo })
  }
  
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/libraries", this.state.newVideo).then(()=>{
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

  deleteButtonAction = () => {
    axios
      .delete(
        `/api/libraries/${this.state.match.params.libVideoId}`,
        this.state.libVideos
      )
      
    this.componentDidMount();
      
  };
  
  render() {
    const {libVideos, searchField} = this.state;
    const filteredVideos = libVideos.filter( libVideo => 
      libVideo.title.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='video-display' >
      <h1>Library Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList libVideos={filteredVideos}></VideoList>
        
        <form onSubmit={this.handleSubmit} >
        <label>New Video</label>
        <br/>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleNewFormChange}
          //value= {this.state.newVideo.title}
          />
          <label>Description</label>
          <input  
            type="text"
            name="description"
            onChange={this.handleNewFormChange}
            //value= {this.state.newVideo.description}
            />
            <label>Library</label>
            <input  
            type="text"
            name="library"
            onChange={this.handleNewFormChange}
            //value= {this.state.newVideo.topic}
            />
            <label>Link</label>
            <input  
            type="text"
            name="link"
            onChange={this.handleNewFormChange}
            //value= {this.state.newVideo.link}
           />
           <input type="submit" value="Add New Video" />
      </form>
   

      </div>
    )
  }
}
