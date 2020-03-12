//individual show page for each video will contiain edit and delete button
import React from 'react'

export const IndivLangVideo = props => (
    <div className='indiv-video-container'>
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/?{langVideo.link}" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    
        <h2>{props.langVideo.name} </h2>
        <p>{props.langVideo.description}</p>
        <p>{props.langVideo.language}</p>
    </div>

)
