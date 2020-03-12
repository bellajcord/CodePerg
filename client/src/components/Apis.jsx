import React, { Component } from 'react';
import axios from 'axios';
import {VideoList} from './Api/api-list-component';
import {SearchBox} from './Search-box';


export default class Apis extends Component {
  constructor(){
    super();

    this.state = {
      apiVideos: [],
      searchField: '',
    };
  }

  componentDidMount = () => {
    axios.get('/api/apivideo').then(res => {
        this.setState({apiVideos: res.data})
    })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }
  
  
  render() {
    const {apiVideos, searchField} = this.state;
    const filteredVideos = apiVideos.filter( apiVideo => 
      apiVideo.title.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='video-display' >
      <h1>Api Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList apiVideos={filteredVideos}></VideoList>
        
      </div>
    )
  }
}
