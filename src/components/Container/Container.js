import React from 'react';
import './Container.css';
import MathCard from '../MathCard/MathCard';

function Container({ expressions }) {
  const createCards = expressions.map(expression => {
      return <MathCard expression={expression}/>
  });

  return (
    <div className='container'>
      {createCards}
    </div>
  );
}

export default Container;
