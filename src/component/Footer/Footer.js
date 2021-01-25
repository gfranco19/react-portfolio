import React from "react";
import Container from "../container/Container";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn  } from "@fortawesome/free-brands-svg-icons";
import Resume from "../../assets/img/Resume1.pdf";


function Footer (){

    return (
        <div className="footerImg">
        <Container 
        
        pageName={[<div className="tittle">Contact</div>]}

        details={[
        
            <div className="container back">
            <div className="row">
              <div className="col-sm ">
               <a className="icon" href="https://github.com/gfranco19?tab=repositories" target="popup"><FontAwesomeIcon icon={faGithubAlt} size="3x" /></a> 
              </div>
              <div className="col-sm ">
              <a className="icon" href="https://www.linkedin.com/in/giovanny-franco-5a1882b8/" target="popup"><FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a>
              </div>
              <div className="col-sm ">
              <a className="icon" href={Resume} download="GfrancoResume"><FontAwesomeIcon icon={faFileDownload} size="3x" /></a>
              </div>
            </div>
          </div>
            
        
        ]}
        
        />

        </div>




    )
}

export default Footer;