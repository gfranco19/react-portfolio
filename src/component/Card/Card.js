import React from "react";

function Card(props) {
    return(
    <div>
    <div className="card" src = {props.Img} alt={props.imgName}>
        <h5 className="card-header">{props.head}</h5>
        <div className="card-body">
            <p className="card-text">{props.cardInfo}</p>
        </div>
    </div>
    </div>
    )

}

export default Card;