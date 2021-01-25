import React, { useState, useRef  } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";



function NavTabs (){

  const scrollToRef = (ref) => window.scrollTo({top:0, behavior: 'smooth'});
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  const onClick = () => {
    window.scroll({ 
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth'
    });
  }
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  const [navbar, setNavbar] = useState(false);

  const changeBackground =() =>{
    if(window.scrollY >= 80) {
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
 window.addEventListener("scroll", changeBackground);
  return (
    <nav ref={myRef} className={navbar ? "navbar active navbar-expand-lg transparent navbar-inverse navbar-light  fixed-top" : "navbar navbar-expand-lg transparent navbar-inverse navbar-light fixed-top"} >
    <ul className="navbar-nav ">
      <li className="nav-item active ">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <h3 onClick= {executeScroll} >Home</h3>
        </Link>
      </li>
      </ul>
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active ">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <h3 onClick= {onClick} >Contact</h3>
        </Link>
      </li>
    </ul>
</nav>
  );
}

export default NavTabs;
