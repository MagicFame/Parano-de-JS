import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ({ tasks }) => {
  const data = Object.keys(tasks).map(key => {
    return (
      <tr key={key}>
        <td>{tasks[key].title}</td>
        <td>{tasks[key].description}</td>
        <td>{tasks[key].deadline}</td>
      </tr>
    )
  })
  return (
    <div align='center' className='card bg-dark text-white mx-auto' style={{ marginTop: '5em' }}>
      <div className='card-header'>
        <h2>Tasks</h2>
      </div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Deadline</th>
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
