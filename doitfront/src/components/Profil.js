import React from 'react'
import UserInformation from './UserInformation'

const Profil = ({ user }) => {
  return (
    <div style={{ width: '90%', marginLeft: '10%' }}>
      <span />
      <UserInformation user={user} />
    </div>
  )
}

export default Profil
