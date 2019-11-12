import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: ''
    };
  }


  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json()
    .then(users => this.setState({
      monsters: users
    })))
  }


  render() {
    const {monsters, searchInput} = this.state;
    // const monsters = this.state.monsters // 

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
    return(
      <div className="App"> 
      <input
        onChange={event => this.setState({
          searchInput: event.target.value
        })}
        className="pa2"
        type="search"
        placeholder="Search Monsters Here"
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
