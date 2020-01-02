import React from 'react';
import './Container.css';
import MathCard from '../MathCard/MathCard';

function Container({ solutions }) {

  const createCards = solutions.map(solution => {
      return <MathCard
        expression={solution.expression}
        answer={solution.answer}
      />
  });

  return (
    <div className='container'>
      {createCards}
    </div>
  );
}

export default Container;
