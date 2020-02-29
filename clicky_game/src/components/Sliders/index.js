import React from "react";
import hogwarts from "../../images/hogwarts.jpg";
import hallway from "../../images/hallway.jpg";


function Slider(props){
    return (
      
    <div>
        <div className="slider">
            <ul className="slides">
                <li>
                    <img alt="Backdrop" src={hogwarts}/>
                    <div className="caption center-align">
                        <h1>CLICKY GAME</h1>
                        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                    </div>
                </li>
                <li>
                    <img alt="Backdrop" src={hallway}/>
                    <div className="caption center-align">
                        <h3>Good luck Muggle!</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    )
}

export default Slider;