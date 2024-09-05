// import React, { useRef, useState } from "react";

// import { useGesture } from "@use-gesture/react";

import ReactPlayer from "react-player";
import video from "../../assets/Intro.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url={video} controls width={"90%"} height={"90%"} />
    </div>
  );
};

export default VideoPlayer;
