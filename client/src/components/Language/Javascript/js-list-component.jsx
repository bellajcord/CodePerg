// all videos listed and add-to button
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class JavaScripts extends Component {
    state = {
        videos: [],
        video: {
          name: "",
          id: "",
          description: ""
        },
        newVideo: {
          name: "",
          id: "",
          description: "",
        },
        videoForm: false
      };
    
      updatePage = () => {
        axios.get("/api/video").then(res => {
          this.setState({ video: res.data });
        });
        axios.get("/api/video").then(res => {
          this.setState({ video: res.data });
        });
      };
      componentDidMount() {
        this.updatePage();
      }
      handleToggleNewForm = () => {
        this.setState(state => {
          return { videoForm: !state.videoForm };
        });
      };
      handleNewFormChange = evt => {
        const newVideo = { ...this.state.newVideo };
        newVideo[evt.target.name] = evt.target.value;
        this.setState({ newVideo });
      };
      handleSubmit = evt => {
        evt.preventDefault();
        axios.post("/api/video", this.state.newVideo).then(() => {
          this.setState({
            videoForm: false,
            newVideo: {
              name: "",
              id: "",
              description: "",
            }
          });
        });
        this.updatePage();
      };
    render() {
        return (
            <div>
            <h2>JavaScript Videos</h2>
            </div>
        )
    }
}





