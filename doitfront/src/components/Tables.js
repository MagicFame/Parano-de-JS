import React from 'react'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Tables = ({ tasks }) => {
  const data = Object.keys(tasks).map(key => {
    return (
      <tr key={key}>
        <td>{tasks[key].title}</td>
        <td>{tasks[key].content}</td>
        <td>{tasks[key].comment}</td>
        <td>{new Date(tasks[key].startState).toLocaleDateString()}</td>
        <td>{new Date(tasks[key].endState).toLocaleDateString()}</td>
        <td>{tasks[key].relevance}</td>
        <td id={`td-${tasks[key]._id}`}>{tasks[key].status[0]}</td>
        <td><FontAwesomeIcon icon={faCoffee} /></td>
      </tr>
    )
  })
  return (
    <div align='center' className='card bg-dark text-white mx-auto' style={{ width: '85%', marginTop: '5%' }}>
      <div className='card-header'>
        <h2>Tasks</h2>
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
