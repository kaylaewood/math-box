import React from 'react';
import './Container.css';
import MathCard from '../MathCard/MathCard';

function Container({ expressions }) {
  const createCards = expressions.map(expression => {
    fetch(`https://newton.now.sh/simplify/${expression}`)
      .then(response => response.json())
      .then(data => console.log(data.result))
      return <MathCard
        expression={expression}
        // answer={answer}
      />
  });

  return (
    <div className='container'>
      {createCards}
    </div>
  );
}

export default Container;
