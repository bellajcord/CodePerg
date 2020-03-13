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

  //handleChange = (e) => {
   // this.setState({ searchField: e.target.value});
  //}
  
  handleNewFormChange = (e) => {
    const attribute = e.target.name
    const newVideo = {...this.state.newVideo}
    newVideo[attribute] = e.target.value
    this.setState({newVideo: newVideo})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/languages", this.state.newVideo).then(()=>{
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
   // const {langVideos, searchField} = this.state;
   // const filteredVideos = langVideos.filter( langVideo => 
    //  langVideo.name.toLowerCase().includes(searchField.toLowerCase())
     // );

    return (
      <div className='video-display' >
      <h1>Language Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList langVideos={filteredVideos}></VideoList>
        
      </div>
    )
  }
}
