
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
