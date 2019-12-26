import React, { Component } from 'react'
import UserTasks from './UserTasks'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: {}
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <>
        <header style={{ width: '90%', marginLeft: '10%' }}><h1 style={{ textAlign: 'center' }}>Welcome in the Dashboard {this.props.user.firstname} </h1></header>
        <UserTasks token={this.props.token} id={this.props.id} />
      </>
    )
  }
}

export default Dashboard
