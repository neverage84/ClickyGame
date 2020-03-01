import React from "react";
import "./style.css"

function CharacterCard(props){
return(
<div className="container">
    <div class="row">
        <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img alt={props.name} src={props.image} />
                    <span class="card-title">{props.title}</span>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default CharacterCard;