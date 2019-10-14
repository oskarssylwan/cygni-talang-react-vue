import React from 'react';
import './Game.css';
import {
  initialState, calculateWinner, currentMove, move, jumpTo,
} from './engine';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  render() {

    const current = currentMove(this.state);

    let status = `Next player: 'X'`;

    return (
      <div className="game">
        {/* Board component */}
        <div className="game-board">
          <div>
            <div className="board-row">
              {/* Square components */}
              <button type="submit" className="square"></button>
              <button type="submit" className="square">X</button>
              <button type="submit" className="square"></button>
            </div>
            <div className="board-row">
              {/* Square components */}
              <button type="submit" className="square"></button>
              <button type="submit" className="square"></button>
              <button type="submit" className="square"></button>
            </div>
            <div className="board-row">
              {/* Square components */}
              <button type="submit" className="square"></button>
              <button type="submit" className="square"></button>
              <button type="submit" className="square"></button>
            </div>
          </div>
        </div>

        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

export default Game;
