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

//form
  handleNewFormChange = evt => {
    const newVideo = {...this.state.newVideo};
    newVideo[evt.target.title] = evt.target.value;
    this.setState({newVideo});
  };

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
    //const {apiVideos, searchField} = this.state;
    //const filteredVideos = apiVideos.filter( apiVideo => {
      // apiVideo.title.toLowerCase().includes(searchField.toLowerCase())
      // console.log(apiVideo.title.toUpperCase())
      //console.log(searchField)
    
      
    //  );

    return (
      <div className='video-display' >
      <h1>Api Videos</h1>
      <SearchBox 
            placeholder="search videos"
            hanldeChange = {this.handleChange }
            />
        <VideoList apiVideos={this.state.apiVideos}></VideoList>
     
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
               <label>Topic</label>
               <input  
               type="text"
               name="topic"
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
