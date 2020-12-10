import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
// import logo from './logo.svg'; // logo is variable
import './App.css';

class App extends Component {
  constructor() {
    super()    
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response))
    .then(response => response.json())
    // .then(users => console.log(users))
    .then( users => this.setState({monsters: users}))
  }

  handleChange = e => {
    return this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state // to keep this.state data original instead use variables.
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search omonsters'
          handleChange={this.handleChange}
          // handleChange={this.setState({ searchField: e.target.value }}
        />
        {/* onChange={e => console.log(e.target.value)}> */}
        {/* SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: input, …} */}
        <CardList monsters={filteredMonsters}>
        {/* <CardList monsters={this.state.monsters}> */}
          {/* <h1>SeanLin</h1> */}
        </CardList>
      </div>
    )
  }
}

// same as
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//        <p>{ this.state.string }</p>
//        <button onClick={() => this.setState({ string: 'Gal'})}>Clcik Me</button>
//       </header>
//     </div>
//   );
// }

export default App;
