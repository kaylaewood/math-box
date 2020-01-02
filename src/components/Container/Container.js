import React from 'react';
import './Container.css';
import MathCard from '../MathCard/MathCard';

function Container() {
  return (
    <div className='container'>
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
    </div>
  );
}

export default Container;
