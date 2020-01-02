import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <form>
        <input type='text' placeholder='example: 8(4)+9^2' />
        <button id='calculate-button'>Calculate!</button>
      </form>
    );
  }
}

export default Form;
