import React from "react";
import "./style.css"
import HarryPotter from "../../images/HPLogo.png"

function NavBar(props){
    return (
    <nav className="brown darken-4 NavDim">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center"><img className="HPLogo" src={HarryPotter} alt="HarryPotter"/></a>
    </div>
  </nav>
  
    ); 
}

export default NavBar;