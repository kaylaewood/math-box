import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      solutions: []
    }
  }

  addExpression = async (expression) => {
    const response = await fetch(`https://newton.now.sh/simplify/${expression}`);
    const data = await response.json();
    this.setState({
      solutions: [...this.state.solutions, {expression: data.expression, answer: data.result}]
    })
  }

  render() {
    return (
      <main>
      <header>Math Box</header>
      <Form addExpression={this.addExpression}/>
      <Container solutions={this.state.solutions}/>
      </main>
    );
  }
}

export default App;
