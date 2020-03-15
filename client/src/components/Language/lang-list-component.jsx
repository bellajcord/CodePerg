// all videos listed and add-to button

import React from "react";
import { IndivLangVideo } from "./lang-indiv-component";
import '../topics-styles.css';

export const VideoList = props => {
  return (
    <div className="video-list">
      {props.langVideos.map(langVideo => (
        <IndivLangVideo key={langVideo._id} langVideo={langVideo} />
      ))}
    </div>
  );
};