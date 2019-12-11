import React, { Component } from 'react'

class Register extends Component {

  state = {
    username: '',
    fname: '',
    lname: '',
    bday: '',
    phone: '',
    email: '',
    password: ''
  }

  // Appel API de création de compte
  handleSubmit = async event => {
    event.preventDefault()
    await fetch('http://localhost:8124/api/authentication/register', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        username: this.state.username,
        firstname: this.state.fname,
        lastname: this.state.lname,
        birthdate: this.state.bday,
        phone: this.state.phone,
        mail: this.state.email,
        password: this.state.password
      })
    })
    .then(async (data) => {
      await console.log(data.json())
      // TO DO : Traiter la réponse, le cas d'erreur et la redirection (message user)
    })
  }

  handleChangeUsername = event => {
    let username = event.target.value
    this.setState({username})
  }
  handleChangeFirst = event => {
    let fname = event.target.value
    this.setState({fname})
  }
  handleChangeLast = event => {
    let lname = event.target.value
    this.setState({lname})
  }
  handleChangeBirth = event => {
    let bday = event.target.value
    this.setState({bday})
  }
  handleChangePhone = event => {
    let phone = event.target.value
    this.setState({phone})
  }
  handleChangeEmail = event => {
    let email = event.target.value
    this.setState({email})
  }
  handleChangePassword = event => {
    let password = event.target.value
    this.setState({password})
  }



  render () {
    return (
      <div className='col-6'>
        <h2>New account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Username' id='username' className='form-control' onChange={this.handleChangeUsername} required />
          </div>
          <div className='form-group row'>
            <div className='col-sm-6'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' placeholder='First name' id='fname' className='form-control' onChange={this.handleChangeFirst} required />
            </div>
            <div className='col-sm-6'>
              <label htmlFor='lname'>Last name</label>
              <input type='text' placeholder='Last name' id='lname' className='form-control' onChange={this.handleChangeLast} required />
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-6'>
              <label htmlFor='birth'>Birthdate</label>
              <input type='date' id='birth' className='form-control' onChange={this.handleChangeBirth} />
            </div>
            <div className='col-sm-6'>
              <label htmlFor='phone'>Phone</label>
              <input type='text' placeholder='Phone' id='phone' className='form-control' onChange={this.handleChangePhone} />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='Email' id='email' className='form-control' onChange={this.handleChangeEmail} required />
          </div>
          <div className='form-group'>
            <label htmlFor='pwd'>Password</label>
            <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={this.handleChangePassword} required />
          </div>
          <button type='submit' className='btn btn-success'>Sign in</button>
        </form>
        <p>Got account ? <button type='button' onClick={() => this.props.handleClick(1)} class='btn btn-info'>Login</button></p>
      </div>
    )
  }
}

export default Register
