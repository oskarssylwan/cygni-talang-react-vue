import React from 'react';
import './Square.css';

export const Square = ({move, index, children}) =>
  <button onClick={() => move(index)} type="submit" className="square">
    {children}
  </button>
