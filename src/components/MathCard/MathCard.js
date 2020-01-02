import React from 'react';
import './MathCard.css';

function MathCard({ expression }) {
  return (
    <div className='math-card'>
      <p>Expression: {expression}</p>
      <p>Answer: 14</p>
      <button id='delete-card-button'>Delete</button>
    </div>
  );
}

export default MathCard;
