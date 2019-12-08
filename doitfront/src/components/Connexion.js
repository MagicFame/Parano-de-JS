import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import Notiflix from 'notiflix-react'

class Connexion extends Component {
  constructor(props){
    super(props)
    this.state = {
      connected: false,
      uid: ''
    }
  }

  componentDidMount () { 
    Notiflix.Report.Init({});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // Call the API to check if the combination user / password is correct
    // If it's good
    if (true) {
      this.setState({
        connected: true,
        uid: '150302'
      })
    } else { // Else 
      Notiflix.Report.Failure( 'An error occured', 'Bad combination email password', 'Click' ); 
    }
  }


  render () {
    if (this.state.connected) {
      return <Redirect push to={{ pathname: `/home`, state: {uid: this.state.uid} }} />
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <img src={require('../images/bg-01.jpg')} className='img-fluid' alt='fond' />
          </div>
          <div className='col-6'>
            <h2>Account Login</h2>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input type='email' placeholder='email' id='email' className='form-control' required />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' id='pwd' placeholder='Password' required />
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
