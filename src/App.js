import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeLocationWidget from './components/ChangeLocationWidget'

class App extends Component {
  
  constructor() {
    super()

    this.state = {

      name: 'Russell',
      location: 'Texas'
    }

    this.changeLocation = this.changeLocation.bind(this)

  }

  changeLocation(location) {
    this.setState({
      name: 'Danielle',
      location
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.state.name}</h2>

          <h3>You are in {this.state.location}</h3>
        </div>
        <div>
          <button onClick={() => this.setState({name: 'Elleigh'})}>Name Button</button>
          <ChangeLocationWidget changeLocation={this.changeLocation} />
        </div>
      </div>
    );
  }
}

export default App;
