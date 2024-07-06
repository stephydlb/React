import React, { Component } from 'react';
import './App.css';
//import Member from './components/Member';

const famille = {
  member1:{
    name: 'stephane',
    age: 23
  },
  member2:{
    name: 'kalubiaka',
    age: 24
  
  } 
}

class App extends Component {

  state = {
    famille
  }

  handleClick = () => {
    const famille = { ...this.state.famille}
    famille.member1.age += 2
    famille.member2.age += 2
    this.setState({famille})
  }

  render() {
    const {famille} = this.state
    return (
      <div className="App">
        <h2>Les Membres de la famille</h2>

        <member>
          age: {famille.member1.age}
          name: {famille.member1.name}
        </member>
          age: {famille.member2.age}
          name: {famille.member2.name}<member/>
        
        <button onClick={this.handleClick}>Click-ici</button>
      </div>
    );
  }
}

export default App;
