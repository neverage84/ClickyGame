import React from "react";
import "./style.css"

function CharacterCard(props){
return(
        <div className="col s3">
            <div className="card">
                <div className="card-image center-align">
                    <img className="img-dim" alt={props.name} src={props.image} />
                    
                        {/* <span className="card-title"><h5 class="center-align">{props.name}</h5></span> */}
                </div>
              
            </div>
        </div>
);
}

export default CharacterCard;