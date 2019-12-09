import React from 'react'

const Card = () => {
  return (
    <div style={{ width: '70%' }} className='card bg-dark text-white'>
      <div className='card-header'>Ajouter une tâche</div>
      <div className='card-body'>
        <div className='row justify-content-center'>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title of the task</label>
              <input type='text' id='title' placeholder='Task title' />
            </div>
            <div className='form-group'>
              <label htmlFor='desc'>Description of the task</label>
              <input type='text' id='desc' placeholder='Description' />
            </div>
            <div className='form-group'>
              <label htmlFor='deadline'>Deadline</label>
              <input id='deadline' type='date' />
            </div>
            <button type='button' className='btn btn-outline-secondary'>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Card
