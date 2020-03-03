import React from "react";
import "./style.css"
import HarryPotter from "../../images/HPLogo.png"

function NavBar(props){
    return (
 <div className="navbar-fixed">       
    <nav className="black NavDim">
        <div className="nav-wrapper">
            <div className="container">

            
                {/* <a href="#" className="brand-logo center"><img className="HPLogo" src={HarryPotter} alt="HarryPotter"/></a> */}
                    <div className="row">
                        <div className="col s3 left">
                            <h3>Top Score: {props.TopScore}</h3>
                        </div>
                        <div className="col s3 center">
                            <img className="HPLogo" src={HarryPotter} alt="HarryPotter"/>
                        </div>

                        <div className="col s3 right">
                            <h3>Current Score: {props.CurrentScore} </h3>
                        </div>
                    </div>
                      
               </div>       
             
        </div>
  </nav>
  </div>

    ); 
}

export default NavBar;