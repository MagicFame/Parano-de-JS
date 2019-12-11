import React from 'react'

const Login = ({ handleSubmit, handleChangeUsername, handleChangePassword, handleClick }) => {
  return (
    <div className='col-6'>
      <h2>Account Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='text' placeholder='Username' id='username' className='form-control' onChange={handleChangeUsername} required />
        </div>
        <div className='form-group'>
          <label htmlFor='pwd'>Password</label>
          <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={handleChangePassword} required />
        </div>
        <button type='submit' className='btn btn-success'>Sign in</button>
      </form>
      <p>No account yet ? <button type='button' className='btn btn-info' onClick={() => handleClick(2)}>Register</button></p>
    </div>
  )
}

export default Login
