// all videos listed and add-to button

import React from 'react';
import {IndivLangVideo} from './lang-indiv-component';

export const VideoList = props => (
    <div className='video-list'>
    
     {
         props.langVideos.map(langVideo => (
           <IndivLangVideo key={langVideo._id} langVideo={langVideo} />
          ))
        }
    </div>

)    