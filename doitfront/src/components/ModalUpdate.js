import React from 'react'
import { Modal, Button, Container, Row } from 'react-bootstrap'

const ModalUpdate = ({ tasks, modalOpen, modifyTask, idKey, cancelModifications, saveModifications }) => {
  const handleChange = event => {
    const task = tasks[idKey]
    const { name, value } = event.target
    task[name] = value
    modifyTask(task, idKey)
  }

  const handleChangeStatus = event => {
    const task = tasks[idKey]
    task.status[0] = event.target.value
    modifyTask(task, idKey)
  }

  const handleChangeDate = event => {
    if (event.target.value !== '') {
      const task = tasks[idKey]
      task.endState = event.target.value
      modifyTask(task, idKey)
    }
  }

  const saveUpdate = event => {
    saveModifications(event, idKey)
  }

  return (
    <Modal
      show={modalOpen}
      onHide={cancelModifications}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update a task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <div className='form-group col-sm-6'>
              <label htmlFor='title'>Title of the task</label>
              <input type='text' name='title' className='form-control' id='title' placeholder='title' onChange={handleChange} value={tasks[idKey].title} />
            </div>
            <div className='form-group col-sm-6'>
              <label htmlFor='desc'>Description of the task</label>
              <textarea id='desc' name='content' className='form-control' placeholder='Description' value={tasks[idKey].content} onChange={handleChange} />
            </div>
          </Row>
          <Row>
            <div className='form-group col-sm-6'>
              <label htmlFor='comment'>Comment</label>
              <textarea id='comment' name='comment' className='form-control' placeholder='Comment' value={tasks[idKey].comment} onChange={handleChange} />
            </div>
            <div className='form-group col-sm-6'>
              <label htmlFor='deadline'>Deadline</label>
              <input className='form-control' name='endState' id='deadline' type='date' value={new Date(tasks[idKey].endState).toISOString().substr(0, 10)} onChange={handleChangeDate} />
            </div>
          </Row>
          <Row>
            <div className='form-group col-sm-6'>
              <label htmlFor='priority'>Priority</label>
              <select className='custom-select' name='relevance' id='inputGroupSelect01' value={tasks[idKey].relevance} onChange={handleChange}>
                <option value='Default'>Choose...</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
            <div className='form-group col-sm-6'>
              <label htmlFor='priority'>Status</label>
              <select className='custom-select' name='status' id='inputGroupSelect01' onChange={handleChangeStatus} value={tasks[idKey].status[0]}>
                <option value='Default'>Choose...</option>
                <option value='Pending'>Pending</option>
                <option value='On Going'>On Going</option>
                <option value='Completed'>Completed</option>
              </select>
            </div>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={cancelModifications}>
          Close
        </Button>
        <Button variant='success' onClick={saveUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalUpdate
