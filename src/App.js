import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users =>
        this.setState(() => { return { monsters: users, filteredMonsters: users } }))
      .catch(console.error)
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(m =>
      m.name.toLowerCase().includes(this.state.search.toLowerCase()))

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder="Search a monster here"
          value={this.state.search}
          onChange={(event) => {
            const { value } = event.target;
            this.setState({ search: value })
          }} />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
