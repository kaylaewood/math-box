import React from 'react';
import './MathCard.css';

function MathCard({ expression, answer }) {
  return (
    <div className='math-card'>
      <p>Expression: {expression}</p>
      <p>Answer: {answer}</p>
      <button id='delete-card-button'>Delete</button>
    </div>
  );
}

export default MathCard;
