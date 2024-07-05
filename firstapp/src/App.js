import React, { Component } from 'react';
import './App.css';
import Member from './components/Member';

class App extends Component {

  handleClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>React application</h1>
        <Member name="stephane" age={23}/>
        <Member name="kalubiaka" age={24}/>
        <Member name="mulumba" age={23}/>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
