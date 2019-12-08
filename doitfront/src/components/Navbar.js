import React from 'react'
import './Navbar.css'

const Navbar = ({ changeContent }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-left'>
      <img src={require('../images/logo.jpg')} class='img-fluid' alt='Resposive logo' />
      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(1)}>Dashboard</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button' onClick={() => changeContent(2)}>Profil</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button'>Contact</button>
          </li>
          <li className='nav-item dropdown'>
            <button className='btn btn-dark dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='button'>Dropdown</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
