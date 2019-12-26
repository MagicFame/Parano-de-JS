import React from 'react'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons'

const Tables = ({ tasks, changeStateModal, askDeleteTask, modifyOrder }) => {
  const data = Object.keys(tasks).map(key => {
    return (
      <tr key={key}>
        <td>{tasks[key].title}</td>
        <td>{tasks[key].content}</td>
        <td>{tasks[key].comment}</td>
        <td>{new Date(tasks[key].startState).toLocaleDateString()}</td>
        <td>{new Date(tasks[key].endState).toLocaleDateString()}</td>
        <td>{tasks[key].relevance}</td>
        <td>{tasks[key].status[0]}</td>
        <td style={{ textAlign: 'center' }}>
          <div className='row'>
            <div className='col-3'>
              <FontAwesomeIcon onClick={() => changeStateModal(tasks[key]._id)} icon={faMarker} />
            </div><div className='col-3'>
              <FontAwesomeIcon onClick={() => askDeleteTask(tasks[key]._id)} icon={faTrash} />
            </div>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <div align='center' className='card bg-dark text-white mx-auto' style={{ width: '85%', marginTop: '5%' }}>
      <div className='card-header'>
        <h2>Tasks</h2>
        <div className='row'>
          <div className='col-4'>
            <button type='button' onClick={() => modifyOrder(1)} className='btn btn-outline-light btn-sm btn-block'>Order by name</button>
          </div>
          <div className='col-4'>
            <button type='button' onClick={() => modifyOrder(2)} className='btn btn-outline-light btn-sm btn-block'>Order by status</button>
          </div>
          <div className='col-4'>
            <button type='button' onClick={() => modifyOrder(3)} className='btn btn-outline-light btn-sm btn-block'>Order by deadline (sooner first)</button>
          </div>
        </div>
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Comment</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Relevance</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Table>
    </div>
  )
}

export default Tables
