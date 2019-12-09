import React from 'react'

const Profil = ({ pseudo }) => {
  return (
    <div style={{ width: `${window.innerWidth * 0.8}px`, marginLeft: '10%' }}>
      <p>Bienvenue sur ton profil {pseudo}</p>
    </div>
  )
}

export default Profil
