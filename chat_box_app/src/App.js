/**
 * The main React component for the application.
 * 
 * This component renders the main UI for the application, including a message display and a form for adding new messages.
 * 
 * The `messages` state holds an object of message data, where the keys are timestamps and the values are the message objects.
 * 
 * The `addMessage` function is used to add a new message to the `messages` state.
 */
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