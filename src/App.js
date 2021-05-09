import { Component } from "react";
import { CardList } from "./components/card-list/card-list.componets";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            response?.json().then((data) => {
                this.setState({ monsters: data });
            });
        });
    }

    // we use the arrow function to automatically assign the scope of this keyword in the function
    // otherwise, we need to use "this.handlexxx = this.hanlexxx.bind(this)" in the constructor to make sure this keyword is correctly refereced in this function
    handleSearchInputChange = (e) => {
        this.setState({
            searchField: e.target.value,
        });
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="search monsters" handleChange={this.handleSearchInputChange} />
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
