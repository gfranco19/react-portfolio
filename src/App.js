
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./component/Nav/NavTabs";
import Welcome from "./welcomePage/Welcome";
import About from "./pages/about/About";
import Notabilities from "./pages/notabilities/Notabilities";
import Projects from "./pages/projects/Projects";
import Footer from  "./component/Footer/Footer";


function App() {
 
return (
  
  <Router>
    <div>
    <NavTabs />
    <Route exact path = "/" component ={Welcome} />
    </div>
    <About />
    <Notabilities/>
    <Projects />
    <Footer />
  </Router>
 
    
  );
}

export default App;
