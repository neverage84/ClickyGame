import React, { Component } from 'react';
import NavBar from "../NavBar"
import Slider from "../Sliders"
import M from "materialize-css";
import characters from "../../characters.json"
import CharacterCard from "../Characters"
import Container from "../Container"

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
                <Container>
                {this.state.characters.map(characters =>(
                <CharacterCard 
                    name={characters.name}
                    image={characters.image}
                />
                ))}   
                </Container>
            </div>
            
         
        )
    }

}

export default Game;