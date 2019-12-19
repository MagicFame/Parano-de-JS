import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './App.css'
import Navbars from './components/Navbars'
import Dashboard from './components/Dashboard'
import Profil from './components/Profil'
import AddTask from './components/AddTask'

class App extends Component {
  state = {
    id: this.props.location.state !== undefined ? this.props.location.state.id : '',
    username: '',
    printedContent: 1,
    token: this.props.location.state !== undefined ? this.props.location.state.token : ''
  }

  async componentDidMount () {
    // Revérifier les identifiants
    if (sessionStorage.getItem('token') !== undefined) {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:8124/api/connected/current', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: 'Bearer ' + token
        }
      }).then(async answer => {
        const answerParsed = await answer.json()
        if (answerParsed.status === 'success') {
          this.setState({ id: answerParsed.id })
        } else {
          this.setState({ id: '' })
        }
      })
      // Récupérer les informations sur un utilisateur
      await fetch('http://localhost:8124/api/connected/current/info', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: 'Bearer ' + token
        }
      }).then(async answer => {
        const responseParse = await answer.json()
        const username = responseParse.username
        this.setState({ username })
      })
    } else {
      this.setState({ id: '' })
    }
  }

  signOut = () => {
    sessionStorage.clear()
    this.setState({ id: '' })
  }

  changeContent = mode => {
    const printedContent = mode
    this.setState({ printedContent })
  }

  contentDisplayed = () => {
    if (this.state.printedContent === 1) {
      return <Dashboard pseudo={this.state.username} />
    } else if (this.state.printedContent === 2) return <Profil />
    else if (this.state.printedContent === 3) return <AddTask />
  }

  render () {
    if (this.state.id === '') {
      return <Redirect push to='/' />
    }

    return (
      <div className='wrapper'>
        <Navbars
          changeContent={this.changeContent}
          signOut={this.signOut}
        />
        {this.contentDisplayed()}
      </div>
    )
  }
}

export default App
