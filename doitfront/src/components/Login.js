import React from 'react'

const Login = ({ onHandleSubmit, onHandleChangeUsername, onHandleChangePassword, onHandleClick }) => {
  return (
    <div className='col-6'>
      <h2>Account Login</h2>
      <form onSubmit={onHandleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' autoComplete='username' placeholder='Username' id='username' className='form-control' onChange={onHandleChangeUsername} required />
        </div>
        <div className='form-group'>
          <label htmlFor='pwd'>Password</label>
          <input type='password' autoComplete='current-password' className='form-control' id='pwd' placeholder='Password' onChange={onHandleChangePassword} required />
        </div>
        <button type='submit' className='btn btn-success'>Sign in</button>
      </form>
      <p>No account yet ? <button type='button' className='btn btn-info' onClick={() => onHandleClick(2)}>Register</button></p>
    </div>
  )
}

export default Login
