import React from "react";
import "./Container.css";


function Container(props) {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h1 className="pageName">{props.pageName}</h1>
                    
                    <br></br>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-md-auto">
                    <div className="image-cropper" >
                        <img src={props.imgSrc} alt={props.imgName} className="img" />
                    </div>
                    <p className = "details">{props.details}</p>
                </div>
            </div>
        </div>
    )
}
export default Container;