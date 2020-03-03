import React, { Component } from 'react';
import NavBar from "../NavBar"
import Slider from "../Sliders"
import M from "materialize-css";
import characters from "../../characters.json"
import CharacterCard from "../Characters"
import Container from "../Container"

// var audio = new Audio('./Song.mp3');
class Game extends Component{

    state = {
        characters,
        CurrentScore: 0,
        TopScore: 0
    }
    
  
    
    //Materialize
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        this.setState({ characters : this.shuffleCHAR(this.state.characters) });
    }

   CardClick = id => {
    console.log("CLICKED: " + id);
    // audio.play();
    this.setState({characters: this.shuffleCHAR(this.state.characters)});
   }

    shuffleCHAR = characters => {
        let i = characters.length -1;
        while (i > 0) {
            let j = Math.floor(Math.random()*( i + 1));
            let temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
            i--;
        }
    return characters;
    }

    render(){
        return (
            <div>
                <NavBar 
                CurrentScore={this.state.CurrentScore}
                TopScore={this.state.TopScore} />
                <Slider />
                <Container> 
                {this.state.characters.map(characters =>( 
                <CharacterCard 
                    key={characters.id}
                    id={characters.id}
                    name={characters.name}
                    image={characters.image}
                    CardClick={this.CardClick}
                />
                ))}   
                </Container>
            </div>
        )
    }
}

export default Game;