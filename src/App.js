import "./reset.scss";
import "./App.scss";
import Confetti from "react-confetti";

import { nanoid } from "nanoid";

import { useState, useEffect } from "react";
import Die from "./Die/Die";
import Header from "./Header/Header";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHold === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies((prevTenzies) => !prevTenzies);
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHold: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHold
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHold: false,
              id: nanoid(),
            };
      })
    );
    setCount(count + 1);
  }

  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHold: !die.isHold } : die
      )
    );
  }

  function newGame() {
    setDice(allNewDice());
    setTenzies(false);
    setCount(0);
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      isHold={die.isHold}
      holdDie={() => holdDie(die.id)}
    />
  ));

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <Header />
      <div className="dice-container">{diceElements}</div>

      <button className="dice-btn" onClick={tenzies ? newGame : rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>

      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
