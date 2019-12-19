import React, { Component } from 'react'
import Card from './Card'
import Notiflix from 'notiflix-react'

class AddTask extends Component {

  state = {
    title: '',
    description: '',
    comment: '',
    deadline: '',
    priority: ''
  }

  componentDidMount () {
    Notiflix.Report.Init({})
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
  addNewTask = async event => {
    event.preventDefault()
    // Call API to add a task (POST)
    await fetch('http://localhost:8124/api/tasks/task', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.props.token
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.description,
        comment: this.state.comment,
        startState: new Date(),
        endState: this.state.deadline,
        creator: this.props.id,
        relevance: this.state.priority
      })
    }).then(async answer => {
      const answerParsed = await answer.json()
      if (answerParsed.errors !== undefined) {
        Notiflix.Report.Failure('An error occured', answerParsed.errors, 'Click')
      } else if (answerParsed._id !== undefined) {
        Notiflix.Report.Success(
          'Task created', answerParsed.title + ' has been created', 'Thanks',
          () => {
            this.props.changeContent(1)
          }
        )
      } else {
        Notiflix.Report.Failure('An error occured', 'Please try again', 'Click')
      }
    })
  }

  render() {
    return (
      <div style={{ width: `${window.innerWidth * 0.8}px`, marginLeft: '15%' }}>
        <h1>Add a new task</h1>
        <Card
          handleChangeTitle={this.handleChangeTitle}
          handleChangeDesc={this.handleChangeDesc}
          handleChangeComment={this.handleChangeComment}
          handleChangeDeadline={this.handleChangeDeadline}
          handleChangePriority={this.handleChangePriority}
          addNewTask={this.addNewTask} />
      </div>
    )
  }
}

export default AddTask
