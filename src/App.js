import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
  // Constructor
  constructor(){
    // Calling Parent constructor
    super();
    // State
    this.state ={
      monsters : [],
      searchField : ''
    };
  }
// Lifecycle method
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }
  // handle arrow function
  handleChange = (e) =>{
    this.setState({searchField : e.target.value});
  }
  // Content that we want to render
  render(){
    // For live filter in the DOM
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase()
    .includes(searchField.toLowerCase()));
    return (
      <div className="App">
      {/* Heading */}
      <h1>My Monster App</h1>
      {/* Search Component */}
       <SearchBox 
         placeholder="Ssearch Monster"
         handleChange={this.handleChange}
       />
       {/* Card-List Component */}
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}
export default App;
