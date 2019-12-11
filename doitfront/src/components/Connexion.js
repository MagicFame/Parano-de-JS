import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import Notiflix from 'notiflix-react'
import './Connexion.css'

class Connexion extends Component {
  constructor(props){
    super(props)
    this.state = {
      connected: false,
      username : '',
      password: '',
      token: '',
      id: ''
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
      Notiflix.Report.Failure( 'An error occured', 'Bad combination email password', 'Click' ); 
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
          <div className='col-6'>
            <h2>Account Login</h2>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Username</label>
                <input type='text' placeholder='Username' id='email' className='form-control' onChange={this.handleChangeUsername} required />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={this.handleChangePassword} required />
              </div>
              <button type='submit' className='btn btn-success'>Sign in</button>
            </form>
            <p>No account yet ? <a href='/'>Register</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Connexion
