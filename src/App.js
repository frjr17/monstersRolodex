import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, filteredMonsters: users };
        })
      )
      .catch(console.error);
  }

  onSearchChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search a monster here"
          value={search}
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList />
      </div>
    );
  }
}

export default App;
