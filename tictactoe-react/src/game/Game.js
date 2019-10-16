import React, { useState } from 'react';
import './Game.css';
import {
  initialState, calculateWinner, currentMove, move, jumpTo,
} from './engine';
import { Board } from './widgets/Board'


const Game = () => {
  const [state, setState] = useState(initialState())
  const onMove = index => setState(move(index, state))
  const current = state.history[state.history.length-1];
  const winner = calculateWinner(current.squares)

  let status = winner
    ? `Winner is ${winner}`
    : `Current player: ${state.xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <Board squares={current.squares} move={onMove}/>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  )
}

export default Game;
