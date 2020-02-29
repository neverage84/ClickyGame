import React, { Component } from 'react';
import NavBar from "../NavBar"
import Slider from "../Sliders"
import M from "materialize-css";

class Game extends Component{

    
    //Materialize
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render(){
        return (
            <div>
                <NavBar />
                <Slider />
            </div>
            
         
        )
    }

}

export default Game;