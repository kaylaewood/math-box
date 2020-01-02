import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <main>
      <header>Math Box</header>
      <Form />
      <Container />
      </main>
    );
  }
}

export default App;
