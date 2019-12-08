import React from 'react'

const Profil = ({ pseudo }) => {
  return (
    <div style={{ backgroundColor: 'blue', marginLeft: 'auto', marginRight: 'auto', marginTop: '1em' }}>
      <p>Bienvenue {pseudo}</p>
    </div>
  )
}

export default Profil
