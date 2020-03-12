//individual show page for each video will contiain edit and delete button
import React from 'react'

export const IndivLibVideo = props => (
    <div className='indiv-video-container'>
    <img    
        alt='placeholder'
        // eslint-disable-next-line no-template-curly-in-string
        src={'https://www.fillmurray.com/180/180'}
        />
    
        <h2>{props.libVideo.title} </h2>
        <p>{props.libVideo.library}</p>
        <p>{props.libVideo.description}</p>
        
    </div>

)
