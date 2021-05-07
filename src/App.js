import { Component } from 'react';
import { CardList } from './components/card-list/card-list.componets';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "er",
          name: "Frankestin"
        },
        {
          id: "er2",
          name: "Dracula"
        },
        {
          id: "er3",
          name: "Zombie"
        }
      ]
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response?.json().then(data => {
        this.setState({ monsters: data })
      });
    })
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map(monster => {
              return (
                <h1 key={monster.id}>{monster.name}</h1>
              )
            })
          }
        </CardList>
      </div>
    )
  }
}

export default App;
