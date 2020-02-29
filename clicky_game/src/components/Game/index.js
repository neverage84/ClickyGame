import React, { Component } from 'react';
import NavBar from "../NavBar"
import M from "materialize-css";

class Game extends Component{

    
    //Materialize
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render(){
        return (
            <NavBar />
        )
    }

}

export default Game;