import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const divStyle = {
    color: "firebrick"
  }
  return <div id="home" style={divStyle}>
      <h1>{ name } is a Web Developer From { city }</h1>
    </div>;
}

export default Home;
