import React, { Component } from 'react';
import axios from 'axios';
import {VideoList} from './Language/lang-list-component'
import {SearchBox} from './Search-box'


export default class Languages extends Component {
  constructor(){
    super();

    this.state = {
      langVideos: [],
      searchField: '',
    };
  }

  componentDidMount = () => {
    axios.get('/api/language').then(res => {
        this.setState({langVideos: res.data})
    })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
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
        
      </div>
    )
  }
}
