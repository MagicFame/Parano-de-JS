import React from 'react'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css'

const Card = ({ handleChangeTitle, handleChangeDesc, handleChangeComment, handleChangeDeadline, handleChangePriority, addNewTask }) => {
  return (
    <div style={{ width: '70%' }} className='card bg-dark text-white'>
      <div className='card-header'>Add a new task</div>
      <div className='card-body'>
        <div className='row justify-content-center'>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title of the task</label>
              <input type='text' className='form-control' id='title' placeholder='Task title' onChange={handleChangeTitle} />
            </div>
            <div className='form-group'>
              <label htmlFor='desc'>Description of the task</label>
              <textarea id='desc' className='form-control' placeholder='Description' onChange={handleChangeDesc} />
            </div>
            <div className='form-group'>
              <label htmlFor='comment'>Comment</label>
              <textarea id='comment' className='form-control' placeholder='Comment' onChange={handleChangeComment} />
            </div>
            <div className='form-group'>
              <label htmlFor='deadline'>Deadline</label>
              <input className='form-control' id='deadline' type='date' onChange={handleChangeDeadline} />
            </div>
            <div className='form-group'>
              <label htmlFor='priority'>Priority</label>
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
            <button type='button' className='btn btn-outline-secondary' onClick={addNewTask}>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Card
