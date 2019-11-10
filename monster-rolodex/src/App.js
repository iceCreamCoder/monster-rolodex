import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      greeting: 'Hello Jared'
    }
  }

   buttonClick = () => {
    this.setState({
      greeting: 'Hello Jared, Expert React Developer'
    })
  }
 


  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" />

        <p>{this.state.greeting}</p>

        <button onClick={this.buttonClick}>
        Click Here to Change Text
        </button>

      </div>
    )
  }
}

export default App;
