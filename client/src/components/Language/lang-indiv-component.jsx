//individual show page for each video will contiain edit and delete button
import React from 'react'

export const IndivLangVideo = props => (
    <div className='indiv-video-container'>
    <img    
        alt='placeholder'
        // eslint-disable-next-line no-template-curly-in-string
        src={'https://www.fillmurray.com/180/180'}
        />
    
        <h2>{props.langVideo.name} </h2>
        <p>{props.langVideo.description}</p>
        <p>{props.langVideo.language}</p>
    </div>

)
