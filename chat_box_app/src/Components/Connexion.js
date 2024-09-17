/**
 * Represents the Connexion component, which handles the user's connection to the chat application.
 * The component renders a form with an input field for the user to enter their pseudo (username),
 * and a submit button to initiate the connection. Upon submission, the component updates the
 * application state to indicate that the user is ready to be redirected to the chat page.
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
 
export default class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat:false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }


  render() {
    if (this.state.goToChat) {
    return <Redirect push to={`/Pseudo/${this.state.pseudo}`} />
  }
    return (
      <div className='connexionBox'>
        <form className='Connexion' onSubmit={this.handleSubmit}>
            <input
                value={this.state.firstpseudo}
                onChange={this.handleChange}
                placeholder='Pseudo'
                type='text'
                required />
            <button type='submit'>LANCER</button>
        </form>
      </div>
    )
  }
}
