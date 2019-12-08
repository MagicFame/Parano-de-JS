import React from 'react'
import './Navbar.css'
import Profil from './Profil'

const Navbar = ({ pseudo }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-left'>
      <img src={require('../images/logo.jpg')} class='img-fluid' alt='Responsive image' />
      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button'>Dashboard</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button'>About</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark' id='button'>Contact</button>
          </li>
          <li className='nav-item dropdown'>
            <button className='btn btn-dark dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='button'>Dropdown</button>
            <div className='dropdown-menu'>
              <a className='dropdown-item'>Action</a>
              <a className='dropdown-item'>Another action</a>
              <a className='dropdown-item'>Something else here</a>
              <div className='dropdown-divider' />
              <a className='dropdown-item'>Separated link</a>
              <a className='dropdown-item'>One more separated link</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
