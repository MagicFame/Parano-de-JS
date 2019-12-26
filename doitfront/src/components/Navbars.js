import React from 'react'
import './Navbar.css'

const Navbars = ({ changeContent, signOut }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-left' id='sidebar'>
      <img src={require('../images/logo.jpg')} className='img-fluid' alt='Resposive logo' />
      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(1)}>Dashboard</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(2)}>Profil</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(3)}>Add a new task</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(4)}>List tasks</button>
          </li>
          <li>
            <button className='btn btn-danger' id='button' onClick={signOut}>Sign out</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbars
