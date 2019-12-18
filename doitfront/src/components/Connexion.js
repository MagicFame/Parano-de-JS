import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import Notiflix from 'notiflix-react'
import './Connexion.css'
import Login from './Login'
import Register from './Register'

class Connexion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connected: false,
      username: '',
      password: '',
      token: '',
      id: '',
      affichage: 1
    }
  }

  async componentDidMount () {
    // Initialization of the library Notiflix
    Notiflix.Report.Init({})

    // Check if user is still connected
    if (sessionStorage.getItem('token') !== undefined) {
      let token = sessionStorage.getItem('token')
      await fetch('http://localhost:8124/api/connected/current', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': 'Bearer ' + token
        }
      }).then(async answer => {
        const answerParsed = await answer.json()
        if (answerParsed.status === 'success') {
          this.setState({ 
            connected: true,
            token,
            id: answerParsed.id
          })
        } else {
          this.setState({ connected: false })
        }
      })
    }
  }

  handleSubmit = async (event) => {
    let objectResponse
    event.preventDefault()
    // Call the API to check if the combination user / password is correct
    await fetch('http://localhost:8124/api/authentication/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(async (data) => {
        objectResponse = await data.json()
      })

    if (objectResponse.status === 'success') {
      this.setState({
        connected: true,
        token: objectResponse.data.token,
        id: objectResponse.data.user._id
      })
    } else { // Else
      Notiflix.Report.Failure('An error occured', 'Bad combination email password', 'Click')
    }
  }

  handleChangeUsername = event => {
    const username = event.target.value
    this.setState({ username })
  }

  handleChangePassword = event => {
    const password = event.target.value
    this.setState({ password })
  }

  handleClick = affichage => {
    this.setState({ affichage })
  }

  affichage = () => {
    if (this.state.affichage === 1) {
      return (
        <Login
          onHandleSubmit={this.handleSubmit}
          onHandleChangeUsername={this.handleChangeUsername}
          onHandleClick={this.handleClick}
          onHandleChangePassword={this.handleChangePassword}
        />
      )
    } else if (this.state.affichage === 2) {
      return <Register onHandleClick={this.handleClick} />
    }
  }

  render () {
    if (this.state.connected) {
      sessionStorage.setItem('token', this.state.token)
      sessionStorage.setItem('id', this.state.id)
      return <Redirect push to={{ pathname: '/home', state: { token: this.state.token, id: this.state.id } }} />
    }
    return (
      <div className='container vertical-align'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <img src={require('../images/bg-01.jpg')} className='img-fluid' alt='fond' />
          </div>
          {this.affichage()}
        </div>
      </div>
    )
  }
}

export default Connexion
