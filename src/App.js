/* eslint-disable no-unused-vars */
import './App.css';
import { Component, React } from 'react';
import CardList from './components/card-list/CardList.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
       <h1 className='app-title'>Monsters Card</h1>
        <SearchBox
          className="monster-search-box"
          placeholder="Search Monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
