import React from "react";
import PulseText from 'react-pulse-text';
import "./ArticleItem.css"

function ArticleItem() {
  const articles = [
    {
      title: "title",
      content: [
        <p><span><PulseText text="Front End Developer" duration={800} iterationCount={1}>
          <h6>Front End Developer</h6></PulseText></span></p>
        ,

        <p><span><PulseText text="Back End Developer" duration={800} delay={1000} iterationCount={1}>
          <h6>Back End Developer</h6>
        </PulseText></span></p>,

        <p><span><PulseText text="JS, C++, React, Node, MySQL, Mongo, Express, Oracle, ect.. " duration={2000} delay={2000} iterationCount={1}>
          <h6>JS, C++, React, Node, MySQL, Mongo, Express, Oracle, ect.. </h6>
        </PulseText></span></p>


      ]
    }
  ];
  let i = 0;

  return (

    <div className="article-container">
      <h6>
        {articles[i].content.map(paragraph => paragraph)}
      </h6>
    </div>


  );
}
export default ArticleItem;
