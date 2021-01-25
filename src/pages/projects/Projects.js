import React, { useState } from "react";
import Container from "../../component/container/Container";
import Ed from "../../assets/img/ED.gif";
import EmployeeT from "../../assets/img/employee-tracker.gif";
import FreeB from "../../assets/img/freeB.png";
import FtRa from "../../assets/img/FtRa.jpg";
import LongC from "../../assets/img/Lc.JPG"
import Pwa from "../../assets/img/pwa.JPG";
import Pswrd from "../../assets/img/pwsd.JPG";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faPassport, faIceCream, faDatabase, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faJs, faNode, faBootstrap, faReact, faHtml5, } from "@fortawesome/free-brands-svg-icons";
import "./Project.css";


function Projects() {



    return (
        <div>
            <Container
                pageName="Projects"

                details={[
                    
                    <div>
                                      
                        <div className="card-columns">
                            <div className="card bg-dark text-white">
                                <a href="https://github.com/gfranco19/employee-directory" target="popup"><img className="card-img-top effect" src={Ed} alt="EmployeeD" /></a>
                                <div className="card-body">
                                    <h6 className="card-title">Employee Directory</h6>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faBootstrap} size="lg" />
                                            <FontAwesomeIcon icon={faReact} size="lg" />

                                        </p>
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-dark text-white p-3">
                                <a href="https://github.com/gfranco19/Employee_Tracker" target="popup"><img className="card-img effect" src={EmployeeT} alt="EmployeeT" /></a>
                                <blockquote className="blockquote mb-0 card-body">
                                    <h6 className="card-title">Emplopyee Tracker</h6>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className=" text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faDatabase} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </blockquote>
                            </div>
                            <div className="card bg-dark text-white">
                                <a href="https://github.com/gfranco19/workout-tracker" target="popup"><img className="card-img effect" src={FtRa} alt="Ft" /></a>
                                <div className="card-body">
                                    <h6 className="card-title">Fitness Tracker</h6>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faDatabase} size="lg" />
                                            <FontAwesomeIcon icon={faChartBar} size="lg" />
                                            <FontAwesomeIcon icon={faBootstrap} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-warning text-white text-center p-3">
                                <a href="https://github.com/edonohue8/project-2" target="popup"><img className="card-img effect" src={FreeB} alt="FreeB" /></a>
                                <blockquote className="blockquote mb-0">
                                    <h5 className="card-title">FreeBeez</h5>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faDatabase} size="lg" />
                                            <FontAwesomeIcon icon={faHtml5} size="lg" />
                                            <FontAwesomeIcon icon={faBootstrap} size="lg" />
                                            <FontAwesomeIcon icon={faPassport} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </blockquote>
                            </div>
                            <div className="card text-center bg-dark text-white">
                                <a href="https://github.com/Tbonexas/longcut" target="popup"><img className="card-img effect" src={LongC} alt="LongC" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">The Long Cut</h5>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" />
                                            <FontAwesomeIcon icon={faDatabase} size="lg" />
                                            <FontAwesomeIcon icon={faIceCream} size="lg" />
                                            <FontAwesomeIcon icon={faHtml5} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card p-3 bg-dark text-white text-right">
                                <a href="https://github.com/gfranco19/budgettracker" target="popup"><img className="card-img effect" src={Pwa} alt="Pwa" /></a>
                                <blockquote className="blockquote mb-0">
                                    <h6 className="card-title">Parogressive Budget Tracker</h6>
                                    <p className="card-text"><h6>Technology</h6></p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faNode} size="lg" />
                                            <FontAwesomeIcon icon={faBootstrap} size="lg" />
                                            <FontAwesomeIcon icon={faDatabase} size="lg" />
                                            <FontAwesomeIcon icon={faChartBar} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </blockquote>
                            </div>
                            <div className="card bg-dark text-white">
                                <a href="https://github.com/gfranco19/passwordGenerator" target="popup"><img className="card-img effect" src={Pswrd} alt="Pswrd" /></a>
                                <div className="card-body">
                                    <h6 className="card-title">Password Generator</h6>
                                    <p className="card-text">Technology</p>
                                    <p className="card-text"><small className="text-muted">
                                        <p className="text-center">
                                            <FontAwesomeIcon icon={faJs} size="lg" />
                                            <FontAwesomeIcon icon={faHtml5} size="lg" />
                                        </p>
                                    </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                ]}

            />
        </div>
    );
}

export default Projects;