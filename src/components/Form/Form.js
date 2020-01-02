import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: 'form!'
    }
  }
  render() {
    return (
      <form>
      <p>This is a {this.state.title}</p>
      </form>
    );
  }
}

export default Form;
