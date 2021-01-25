import React, { useState } from "react";
import Container from "../../component/container/Container";
import "./Notabilities.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



function Notabilities() {
const Icon = <FontAwesomeIcon icon= {faAngleDown}/>

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);
    const handleToggle1 = () => {
        setShowText1(!showText1);
    };

    const handleToggle2 = () => {
        setShowText2(!showText2);
    };

    const handleToggle3 = () => {
        setShowText3(!showText3);
    };

    const handleToggle4 = () => {
        setShowText4(!showText4);
    };

    const handleToggle5 = () => {
        setShowText5(!showText5);
    };
    return (
        <div>
            <Container
                pageName="Notabilities"
                details={[
                    <div>
                        <div className="notabil">
                            <ul>
                                <li className ={showText1 ?"notaTitle pulse" : "notaTitle "} onClick={handleToggle1}>A.S. Computer Programming {Icon}</li>

                                <br />
                                <p className={showText1 ? "bulletDescription hide" : "bulletDescription  "} >
                                    "The A.S. Degree in Computer Programming is designed to prepare students for a career in computer programming. The degree offers a balanced set of classNamees that provides students with client, server and database programming skills required by the industry. Emphasis is placed on object-oriented programming applications, configuring servers, creating and navigating databases, and reusable software components. Students will demonstrate the ability to design and implement business environment applications that will contain the front end user interface and back end database."
      </p>
                                <br />
                                <li className ={showText2 ?"notaTitle " : "notaTitle pulse"} onClick={handleToggle2}>A.A. Social & Behavior Sciences {Icon}</li>
                                <br />
                                <p className={showText2 ? "bulletDescription " : "bulletDescription hide"}>
                                    "The intent of this degree is to prepare students for careers and/or higher education in the social sciences, generally, or in the specific disciplines within the the overall social science designation. This degree emphasizes the nature of individual and collective human behavior; our interactions; the political economic, social, and psychological structures and institutions of human beings; and the challenges of developing and sustaining interpersonal and intercultural relationships. This degree will enhance their ability to explain how groups and subgroups operate to make responsible political, moral, and social decisions."
      </p>
                                <br />
                                <li className ={showText3 ?"notaTitle " : "notaTitle pulse"} onClick={handleToggle3}>Skill Certificate in Object-Oriented Design & Programming {Icon}</li>
                                <br />
                                <p className={showText3 ? "bulletDescription " : "bulletDescription hide"}>
                                    "The CIS Professional Certificate in Object-Oriented Design and Programming prepares students for a career in computer programming. The certificate offers a balanced set of classNamees that provides students the skills to design and develop business applications using the Unified Modeling Language (UML) and an object-oriented programming language. Students will demonstrate the ability to design and implement business environment applications that will contain the front end user interface and back end database."
      </p>
                                <br />
                                <li className ={showText4 ?"notaTitle " : "notaTitle pulse"} onClick={handleToggle4}>Skill Certificate in Computer Information Technology {Icon}</li>
                                <br />
                                <p className={showText4 ? "bulletDescription " : "bulletDescription hide"}>
                                    "The Introduction to Computer Information Technology certificate is designed to prepare students for careers that require the understanding and use of computer technology. The certificate offers a balanced set of classNamees that enables students to become proficient with business software such as Word, Excel and Access; implement security techniques to protect computer systems from malware, maintain a computer using utility programs, and create web sites. Emphasis is placed on developing formatted documents using spreadsheets to enter, calculate and graph data; using a database to store and retrieve data and to create forms, reports and queries; protecting a computer’s hardware and software, and using HTML and web page editors to create and publish multimedia web sites. Students will demonstrate the ability to use software to solve business problems and create commercial web sites."
      </p>
                                <br />
                                <li className ={showText5 ?"notaTitle " : "notaTitle pulse"} onClick={handleToggle5}>Skill Certificate in C++ Programming {Icon}</li>
                                <br />
                                <p className={showText5 ? "bulletDescription " : "bulletDescription hide"}>
                                    "The Programming in C++ Certificate prepares students for a career in computer programming. The certificate offers a balanced set of classNamees that provides students the skills to create business-oriented applications in C++, maintain a Microsoft Access database, and learn the tools and techniques required of a systems analyst. Emphasis is placed on object-oriented programming techniques, creating database tables, forms, reports and queries, and implementing a computer system using the system development life cycle methodology. Students will demonstrate the ability to create business applications, write effective program documentation, demonstrate program troubleshooting skills, and build a computer system using the steps of the system development life cycle."
      </p>
                                <br />
                            </ul>
                            <br />
                            <br />
                        </div>

                    </div>


                ]
                }
            />

        </div>
    );
}

export default Notabilities;