import React, { Component } from 'react'
import Tables from './Tables'
import ModalUpdate from './ModalUpdate'

class UserTasks extends Component {
  state = {
    tasks : {},
    modalOpen : false,
    taskId : ''
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

  modifyTask = (task, key) => {
    const tasks = { ...this.state.tasks }
    tasks[key] = task
    this.setState({ tasks })
  }

  changeStateModal = taskId => {
    const modalOpen = !this.state.modalOpen
    this.setState({ modalOpen, taskId })
  }

  saveModifications = async event => {
    event.preventDefault()
    
    // TO DO : Save the task in back (fetch)

  }

  cancelModifications = async () => {
    this.changeStateModal()
    await this.componentDidMount()
  }

  isModal () {
    if (this.state.modalOpen === true) {
      return (
        <ModalUpdate
          modalOpen={this.state.modalOpen}
          changeStateModal={this.changeStateModal}
          tasks={this.state.tasks}
          modifyTask={this.modifyTask}
          idKey={Object.keys(this.state.tasks).find(key => this.state.tasks[key]._id === this.state.taskId)}
          cancelModifications={this.cancelModifications}
          saveModifications={this.saveModifications}
        />
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  render () {
    return (
      <div style={{ width: '90%', marginLeft: '10%' }}>
        <span />
        <Tables tasks={this.state.tasks} changeStateModal={this.changeStateModal} />
        {this.isModal()}
      </div>
    )
  }
}

export default UserTasks
