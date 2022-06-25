import React from "react";
import { name, city } from "../data/data.js"

function Home() {
  // update the JSX being returned!
  const mystyle = {
    color: "firebrick",
  };
  console.log('name and city = ', name, city)
  return ( 
    <div id="home">
      <h1 style={mystyle}>{name} is a Web Developer from {city}</h1>
    </div>
  )
}

export default Home;
