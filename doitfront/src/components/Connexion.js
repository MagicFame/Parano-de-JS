import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import Notiflix from 'notiflix-react'
import './Connexion.css'
import Login from './Login'
import Register from './Register'

class Connexion extends Component {
  constructor(props){
    super(props)
    this.state = {
      connected: false,
      username : '',
      password: '',
      token: '',
      id: '',
      affichage: 1
    }
  }

  componentDidMount () { 
    Notiflix.Report.Init({});
  }

  handleSubmit = async (event) => {
    let objectResponse
    event.preventDefault()
    // Call the API to check if the combination user / password is correct
    await fetch('http://localhost:8124/api/authentication/authenticate', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json;charset=UTF-8'
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
      Notiflix.Report.Failure( 'An error occured', 'Bad combination email password', 'Click' )
    }
  }

  handleChangeUsername = event => {
    let username = event.target.value
    this.setState({username})
  }

  handleChangePassword = event => {
    let password = event.target.value
    this.setState({password})
  }

  handleClick = affichage => {
    this.setState({affichage})
  }

  affichage = () => {
    if (this.state.affichage === 1) {
      return <Login handleSubmit={this.handleSubmit} handleChangeUsername={this.handleChangeUsername} handleClick={this.handleClick}handleChangePassword={this.handleChangePassword} />
    } else if (this.state.affichage === 2) {
      return <Register handleClick={this.handleClick} />
    }
  }

  render () {
    if (this.state.connected) {
      return <Redirect push to={{ pathname: `/home`, state: {token: this.state.token, id: this.state.id} }} />
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
