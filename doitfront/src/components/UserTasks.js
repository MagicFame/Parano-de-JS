import React, { Component } from 'react'
import React from 'react'
import Tables from './Tables'

class UserTasks extends Component {

  componentDidMount () {
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
      <Tables />
    )
  }
}

export default UserTasks
