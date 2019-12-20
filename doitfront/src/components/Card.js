import React from 'react'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css'

const Card = ({ handleChangeTitle, handleChangeDesc, handleChangeComment, handleChangeDeadline, handleChangePriority, addNewTask }) => {
  return (
    <div style={{ width: '70%' }} className='card bg-dark text-white mx-auto'>
      <div className='card-header'>Add a new task</div>
      <div className='card-body' style={{ display: 'flex' }}>
        <div className='col-md-8'>
          <span style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle' }} />
          <img src={require('../images/homework.jpg')} className='img-fluid' alt='fond' />
        </div>
        <div className='col-md-4 justify-content-center' style={{ margin: 'auto' }}>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title of the task *</label>
              <input type='text' className='form-control' id='title' placeholder='Task title' onChange={handleChangeTitle} />
            </div>
            <div className='form-group'>
              <label htmlFor='desc'>Description of the task *</label>
              <textarea id='desc' className='form-control' placeholder='Description' onChange={handleChangeDesc} />
            </div>
            <div className='form-group'>
              <label htmlFor='comment'>Comment *</label>
              <textarea id='comment' className='form-control' placeholder='Comment' onChange={handleChangeComment} />
            </div>
            <div className='form-group'>
              <label htmlFor='deadline'>Deadline *</label>
              <input className='form-control' id='deadline' type='date' onChange={handleChangeDeadline} />
            </div>
            <div className='form-group'>
              <label htmlFor='priority'>Priority *</label>
              <select className='custom-select' id='inputGroupSelect01' onChange={handleChangePriority}>
                <option value='default'>Choose...</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
            {
            // API Google
            /* <div className='form-group'>
              <GooglePlacesAutocomplete
                onSelect={console.log}
              />
              </div> */
            }
            <div className='text-center'>
              <button type='button' className='btn btn-outline-secondary' onClick={addNewTask}>Add</button>
              <p>All fields with asterix are required</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Card
