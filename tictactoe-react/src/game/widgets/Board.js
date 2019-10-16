import React from 'react';
import { Square } from './Square';
import './Board.css';

export const Board = ({ squares, move }) =>
    <div className="game-board">

      <div className="board-row">
          <Square move={move} index={0}>{squares[0]}</Square>
          <Square move={move} index={1}>{squares[1]}</Square>
          <Square move={move} index={2}>{squares[2]}</Square>
      </div>

      <div className="board-row">
        <Square move={move} index={3}>{squares[3]}</Square>
        <Square move={move} index={4}>{squares[4]}</Square>
        <Square move={move} index={5}>{squares[5]}</Square>
      </div>

      <div className="board-row">
        <Square move={move} index={6}>{squares[6]}</Square>
        <Square move={move} index={7}>{squares[7]}</Square>
        <Square move={move} index={8}>{squares[8]}</Square>
      </div>
      
    </div>
