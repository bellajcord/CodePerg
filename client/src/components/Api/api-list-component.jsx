// all videos listed and add-to button

import React from "react";
import { IndivApiVideo } from "./api-indiv-component";

export const VideoList = props => {
  return (
    <div className="video-list">
      {props.apiVideos.map(apiVideo => (
        <IndivApiVideo key={apiVideo._id} apiVideo={apiVideo} />
      ))}
    </div>
  );
};
