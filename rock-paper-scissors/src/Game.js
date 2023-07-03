import React, { useState } from 'react';
import './App.js';
import './App.css';
const choices = ['rock', 'paper', 'scissors'];

const Game = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  };

  return (
    <div className="Game">
      <div>
        <h3>Your Choice: {userChoice}</h3>
        <h3>Computer's Choice: {computerChoice}</h3>
        <h2>{result}</h2>
      </div>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
  
};

export default Game;
