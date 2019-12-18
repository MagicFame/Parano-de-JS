import React, { Component } from 'react'
import Card from './Card'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      comment: '',
      deadline: '',
      priority: ''
    }
  }

  handleChangeTitle = event => {
    const title = event.target.value
    this.setState({ title })
  }

  handleChangeDesc = event => {
    const description = event.target.value
    this.setState({ description })
  }

  handleChangeComment = event => {
    const comment = event.target.value
    this.setState({ comment })
  }

  handleChangeDeadline = event => {
    const deadline = event.target.value
    this.setState({ deadline })
  }

  handleChangePriority = event => {
    const priority = event.target.value
    this.setState({ priority })
  }

  // Add a new task
  // TO DO : Add a new task
  addNewTask (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div style={{ width: `${window.innerWidth * 0.8}px`, marginLeft: '15%' }}>
        <h1>Add a new task</h1>
        <Card 
          handleChangeTitle={this.handleChangeTitle}
          handleChangeDesc={this.handleChangeDesc}
          handleChangeComment={this.handleChangeComment}
          handleChangeDeadline={this.handleChangeDeadline}
          handleChangePriority={this.handleChangePriority}
          addNewTask={this.addNewTask}  />
      </div>
    )
  }
}

export default AddTask
