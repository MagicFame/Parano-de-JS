import React from 'react'

const Profil = ({ pseudo }) => {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1em' }}>
      <p>Bienvenue sur ton profil {pseudo}</p>
    </div>
  )
}

export default Profil
