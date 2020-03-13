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

  //handleChange = (e) => {
    //this.setState({ searchField: e.target.value});
  //}

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
  
  render() {
    // const {libVideos, searchField} = this.state;
    // const filteredVideos = libVideos.filter( libVideo => 
    //   libVideo.title.toLowerCase().includes(searchField.toLowerCase())
    //   );

    return (
      <div className='video-display' >
      <h1>Library Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList libVideos={filteredVideos}></VideoList>
        
      </div>
    )
  }
}
