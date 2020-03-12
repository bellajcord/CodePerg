// all videos listed and add-to button

import React from 'react';
import {IndivLibVideo} from './lib-indiv-component';

export const VideoList = props => (
    <div className='video-list'>
    
     {
         props.libVideos.map(libVideo => (
           <IndivLibVideo key={libVideo._id} libVideo={libVideo} />
          ))
        }
    </div>

)    