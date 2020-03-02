import React from "react";
import "./style.css"

function CharacterCard(props){
return(
        <div className="col s3">
            <div className="card" onClick={() => props.CardClick(props.id)}>
                <div className="card-image center-align">
                    <img className="img-dim" alt={props.name} src={props.image} />
               </div>
             </div>
        </div>
);
}

export default CharacterCard;