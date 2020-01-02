import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  sendExpression = e => {
    e.preventDefault();
    this.props.addExpression(this.state.input);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='input'
          placeholder='example: 8(4)+9^2'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button
          id='calculate-button'
          onClick={this.sendExpression}
        >
          Calculate!
        </button>
      </form>
    );
  }
}

export default Form;
