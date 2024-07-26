import React, { Component } from 'react'
import './App.css' 

import Formulaire from './Components/Formulaire'
import Message from './Components/Message'



export default class App extends Component {
  state = {
    messages: []
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`${Date.now()}`] = message
    this.setState({ messages })
  }
  render() {
    return (
      <div className='App'>
        <h1>Message</h1>
        <Message />
        <Message />
        <Message />
        <Formulaire />
      </div>
    )
  }
}