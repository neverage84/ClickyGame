import React, { Component } from 'react';
import NavBar from "../NavBar"
import Slider from "../Sliders"
import M from "materialize-css";
import characters from "../../characters.json"
import CharacterCard from "../Characters"

class Game extends Component{

    state = {
        characters
    }
    
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
                {this.state.characters.map(characters =>(
                <CharacterCard 
                    name={characters.name}
                    image={characters.image}
                />

                ))}   
            </div>
            
         
        )
    }

}

export default Game;