import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ({ tasks }) => {
  const data = Object.keys(tasks).map(key => {
    return (
      <tr key={key}>
        <td>{tasks[key].title}</td>
        <td>{tasks[key].content}</td>
        <td>{tasks[key].comment}</td>
        <td>{tasks[key].startState}</td>
        <td>{tasks[key].endState}</td>
        <td>{tasks[key].relevance}</td>
      </tr>
    )
  })
  return (
    <div align='center' className='card bg-dark text-white mx-auto' style={{ width: '85%' }}>
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
