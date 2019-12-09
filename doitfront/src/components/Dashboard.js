import React, { Component } from 'react'
import Card from './Card'
import Tables from './Tables'

class Dashboard extends Component {

  state = {
    tasks : {}
  }
  componentDidMount () {
    // Call API to get Data of user
    const tasks = {
      task1 : {
        title: 'Manger',
        deadline: '15/03/2019',
        description: 'Penser à bien manger'
      },
      task2 : {
        title: 'Dormir',
        deadline: '02/08/2020',
        description: 'Dormir au moins 8h'
      },
      task3 : {
        title: 'Sport',
        deadline: '16/11/2019',
        description: 'Faire beaucoup de sport'
      }
    }

    this.setState({tasks})
  }
  render () {
    return (
      <div style={{ width: `${window.innerWidth * 0.8}px`, marginLeft: '10%' }}>
        <header><h1>Welcome in the Dashboard {this.props.pseudo} </h1></header>

        <Card />
        <Tables tasks= {this.state.tasks} />
      </div>
    )
  }
}

export default Dashboard
