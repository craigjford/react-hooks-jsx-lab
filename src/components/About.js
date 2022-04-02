import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
      <h2>About Me</h2>
      <p>I was born in Fargo, North Dakota.  I have lived in Green
        Bay, St. Louis, Chicago and Rumson</p>
       <img src={image} alt="I made this" />    
    </div>;
}

export default About;
