import React, { Component } from 'react'

class Dashboard extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Welcome in the Dashboard {this.props.pseudo} </h1>
      </div>
    )
  }
}

export default Dashboard
