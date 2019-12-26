import React from 'react'

const UserInformation = ({ user }) => {
  return (
    <div style={{ width: '85%', marginTop: '5%' }} className='card bg-dark text-white mx-auto'>
      <div className='card-header'><h2 className='text-center'>Your profile</h2></div>
      <div className='card-body' style={{ display: 'flex' }}>
        <div className='col-8'>
          <span style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle' }} />
          <img src={require('../images/profil.jpg')} className='img-fluid' alt='fond' />
        </div>
        <div className='col-md-4 justify-content-center' style={{ margin: 'auto' }}>
          <div className='form-group'>
            <label htmlFor='firstname'>First name</label>
            <input type='text' id='firstname' className='form-control' value={user.firstname} readOnly />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last name</label>
            <input type='text' id='lastname' className='form-control' value={user.lastname} readOnly />
          </div>
          <div className='form-group'>
            <label htmlFor='mail'>Mail adress</label>
            <input type='text' id='mail' className='form-control' value={user.mail} readOnly />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' className='form-control' value={user.phone} readOnly />
          </div>
          <div className='form-group'>
            <label htmlFor='birth'>Birthdate</label>
            <input type='text' id='birth' className='form-control' value={new Date(user.birthdate).toLocaleDateString()} readOnly />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInformation

