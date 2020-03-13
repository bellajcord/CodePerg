/* eslint-disable jsx-a11y/iframe-has-title */
//individual show page for each video will contiain edit and delete button
import React from 'react'

export const IndivLangVideo = props => {
    return (
    <div className='indiv-video-container'>
    <iframe width="280" height="157" 
        src={'https://www.youtube.com/embed/${props.langVideo.link}'} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="allowfullscreen">
        </iframe>
    
        <h2>{props.langVideo.name} </h2>
        <p>{props.langVideo.description}</p>
        <p>{props.langVideo.language}</p>
    </div>

);
}