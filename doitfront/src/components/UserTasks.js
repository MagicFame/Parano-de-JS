import React, { Component } from 'react'
import Tables from './Tables'

class UserTasks extends Component {
  state = {
    tasks : {}
  }

  async componentDidMount () {
    await fetch('http://localhost:8124/api/connected/current/tasks', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.props.token
      }
    }).then(async answer => {
      const answerParsed = await answer.json()
      const tasks = answerParsed
      this.setState({tasks})
    })
  }

  render () {
    return (
      <Tables tasks={this.state.tasks}/>
    )
  }
}

export default UserTasks
