import React, { Component } from 'react'
import Tables from './Tables'
import ModalUpdate from './ModalUpdate'
import Notiflix from 'notiflix-react'

class UserTasks extends Component {
  state = {
    tasks: {},
    modalOpen: false,
    taskId: ''
  }

  async componentDidMount () {
    Notiflix.Confirm.Init({
      titleColor: '#ffc107',
      okButtonBackground: '#ffc107'
    })
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
      this.setState({ tasks })
    })
  }

  modifyTask = (task, key) => {
    const tasks = { ...this.state.tasks }
    tasks[key] = task
    this.setState({ tasks })
  }

  deleteTask = async (key) => {
    await fetch(`http://localhost:8124/api/connected/current/task/delete/${key}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(async () => {
        await this.componentDidMount()
      })
  }

  askDeleteTask = (key) => {
    Notiflix.Confirm.Show('Confirmation', 'Do you really want to delete this task ?',
      'Yes', 'No', () => this.deleteTask(key), () => console.log('no'))
  }

  changeStateModal = taskId => {
    const modalOpen = !this.state.modalOpen
    this.setState({ modalOpen, taskId })
  }

  saveModifications = async (event, key) => {
    event.preventDefault()
    await fetch('http://localhost:8124/api/connected/current/task/edit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.props.token
      },
      body: JSON.stringify({
        _id: this.state.tasks[key]._id,
        comment: this.state.tasks[key].comment,
        content: this.state.tasks[key].content,
        creator: this.state.tasks[key].creator,
        endState: this.state.tasks[key].endState,
        relevance: this.state.tasks[key].relevance,
        startState: this.state.tasks[key].startState,
        status: this.state.tasks[key].status,
        title: this.state.tasks[key].title
      })
    }).then(async () => {
      this.changeStateModal()
      await this.componentDidMount()
    }
    )
  }

  cancelModifications = async () => {
    this.changeStateModal()
    await this.componentDidMount()
  }

  // type === 1 : by name, type === 2 : by status, type === 3 : by deadline
  modifyOrder = type => {
    let tasks = Object.keys({ ...this.state.tasks }).map(i => this.state.tasks[i])
    if (type === 1) {
      tasks.sort((a, b) => {
        var at = a.title
        var bt = b.title
        return at > bt ? 1 : (at < bt ? -1 : 0)
      })
    } else if (type === 2) {
      tasks.sort((a, b) => {
        var at = a.status[0]
        var bt = b.status[0]
        return at > bt ? 1 : (at < bt ? -1 : 0)
      })
    } else if (type === 3) {
      tasks.sort((a, b) => {
        var at = a.endState
        var bt = b.endState
        return at > bt ? 1 : (at < bt ? -1 : 0)
      })
    }
    this.setState({ tasks })
  }

  isModal () {
    if (this.state.modalOpen === true) {
      return (
        <ModalUpdate
          modalOpen={this.state.modalOpen}
          changeStateModal={this.changeStateModal}
          tasks={this.state.tasks}
          modifyTask={this.modifyTask}
          idKey={Object.keys(this.state.tasks)
            .find(key => this.state.tasks[key]._id === this.state.taskId)}
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
        <Tables
          tasks={this.state.tasks}
          changeStateModal={this.changeStateModal}
          askDeleteTask={this.askDeleteTask}
          modifyOrder={this.modifyOrder}
        />
        {this.isModal()}
      </div>
    )
  }
}

export default UserTasks
