import React, { Component } from 'react'
import Tables from './Tables'
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
      <div style={{ width: `${window.innerWidth * 0.8}px`, marginLeft: '15%' }}>
        <header><h1>Welcome in the Dashboard {this.props.pseudo} </h1></header>
        <UserTasks token={this.props.token} id={this.props.id} />
      </div>
    )
  }
}

export default Dashboard
