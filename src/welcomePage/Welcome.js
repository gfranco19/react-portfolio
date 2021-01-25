import React from "react";
import "./Welcome.css"
import Banner from "../component/particles/Particles"
import ArticleItem from "../component/textRender/ArticleItem";


function Welcome () {
    return (
        
        <div className= "wrapper">
        <Banner/>
      <div className="text">
          <h1 className="name">Hello, I am Giovanny Franco</h1>
          <ArticleItem />
      </div>
      </div>
    
    );
}

export default Welcome;