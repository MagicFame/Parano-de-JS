import React from 'react'
import './Navbar.css'

const Navbars = ({ changeContent }) => {
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
          <li className='nav-item dropdown'>
            <a href='#pageSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'>Pages</a>
            <ul class='collapse list-unstyled' id='pageSubmenu'>
              <li>
                <a href='#'>Page 1</a>
              </li>
              <li>
                <a href='#'>Page 2</a>
              </li>
              <li>
                <a href='#'>Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbars
