import React from "react";

import NavBar from "../navbar/NavBar";

const HeroVideo = () => (
  <div className="hero__container">
    <div className="hero">
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/images/1.png"
        id="bgvideo"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);

export default HeroVideo;

//   poster="placeholder.jpg"
