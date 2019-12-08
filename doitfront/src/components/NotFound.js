import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const NotFound = () => {
  return (
    <div className='row'>
      <p className='h1'>Erreur 404 : cette page n'existe pas</p>
      <button type='button' class='btn btn-warning'>Warning</button>
    </div>
  )
}

export default NotFound
