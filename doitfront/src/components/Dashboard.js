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
        <header style={{ width: '90%', marginLeft: '10%' }}><h1>Welcome in the Dashboard {this.props.pseudo} </h1></header>
        <UserTasks token={this.props.token} id={this.props.id} />
      </>
    )
  }
}

export default Dashboard
