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
        TopScore: 0,
        Guess: false
    }
    constructor(props) {
        super(props);
        this.url = "Song.mp3";
        this.audio = new Audio(this.url);
        this.C_url = "Button.mp3";
        this.C_audio = new Audio(this.C_url);
        this.IC_url = "Lose.mp3";
        this.IC_audio = new Audio(this.IC_url);
      }
     play = (audio) => {
    console.log(this.audio);
    audio.play();
     }


    
    componentDidMount() {
        //Materialize
        // Auto initialize all the things!
        M.AutoInit();
        this.setState({ characters : this.shuffleData(this.state.characters) });
    }

    handleCorrectGuess = newData => {
        const { TopScore, CurrentScore } = this.state;
        const newScore = CurrentScore + 1;
        const newTopScore = Math.max(newScore, TopScore);
       this.play(this.audio);
       this.play(this.C_audio);
    
    
        this.setState({
          characters: this.shuffleData(newData),
          CurrentScore: newScore,
          TopScore: newTopScore
        });
      };
    
      handleIncorrectGuess = data => {
        this.play(this.IC_audio);
        this.setState({
          characters: this.resetData(data),
          CurrentScore: 0
        });
      };
    
      resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
      };
    
      shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
      };
    
      CardClick = id => {
          
        let guessedCorrectly = false;
        const newData = this.state.characters.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
              
            }
          }
          return newItem;
        });
        guessedCorrectly
          ? this.handleCorrectGuess(newData)
          : this.handleIncorrectGuess(newData);
      };


    render(){
        return (
            <div>
                <NavBar 
                CurrentScore={this.state.CurrentScore}
                TopScore={this.state.TopScore} />
                <Slider />
                <Container onClick={this.play}> 
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