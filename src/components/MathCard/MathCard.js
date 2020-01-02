import React from 'react';
import './MathCard.css';

function MathCard() {
  return (
    <div className='math-card'>
      <p>Expression: 2(9)-4</p>
      <p>Answer: 14</p>
      <button id='delete-card-button'>Delete</button>
    </div>
  );
}

export default MathCard;
