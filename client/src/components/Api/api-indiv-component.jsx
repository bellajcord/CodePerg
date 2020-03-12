//individual show page for each video will contiain edit and delete button
import React from 'react'

export const IndivApiVideo = props => (
    <div className='indiv-video-container'>
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/?{apiVideo.link}" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    
        <h2>{props.apiVideo.title} </h2>
        <p>{props.apiVideo.topic}</p>
        <p>{props.apiVideo.description}</p>
        
    </div>

)
