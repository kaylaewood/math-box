import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      expressions: []
    }
  }

  addExpression = (expression) => {
    this.setState({
      expressions: [...this.state.expressions, expression]
    })
  }

  render() {
    return (
      <main>
      <header>Math Box</header>
      <Form addExpression={this.addExpression}/>
      <Container expressions={this.state.expressions}/>
      </main>
    );
  }
}

export default App;
