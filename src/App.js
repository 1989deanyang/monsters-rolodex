import { Component } from "react";
import { CardList } from "./components/card-list/card-list.componets";
import "./App.css";
class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            response?.json().then((data) => {
                this.setState({ monsters: data });
            });
        });
    }

    render() {
        return (
            <div className="App">
                <CardList monsters={this.state.monsters}></CardList>
            </div>
        );
    }
}

export default App;
