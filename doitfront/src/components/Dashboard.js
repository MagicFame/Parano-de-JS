import React, { Component } from 'react'
import UserTasks from './UserTasks'
import Stats from './Stats'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: {},
      tasksCompleted: 0,
      onGoingTasks: 0,
      pendingTasks: 0,
      pieChart: [
        {
          name: 'High relevance',
          value: 0
        },
        {
          name: 'Medium relevance',
          value: 0
        },
        {
          name: 'Low relevance',
          value: 0
        }
      ],
      COLORS: [
        '#65d3da',
        '#79d69f',
        '#fad144'
      ]
    }
  }

  async componentDidMount () {
    await this.fetchData()
  }

  async fetchData () {
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

      let highRelevanceNumb = 0
      let mediumRelevanceNumb = 0
      let lowRelevanceNumb = 0
      let tasksCompleted = 0
      let onGoingTasks = 0
      let pendingTasks = 0
      for (let i = 0; i < this.state.tasks.length; i++) {
        if (this.state.tasks[i].relevance === 'High') {
          highRelevanceNumb += 1
        } else if (this.state.tasks[i].relevance === 'Medium') {
          mediumRelevanceNumb += 1
        } else if (this.state.tasks[i].relevance === 'Low') {
          lowRelevanceNumb += 1
        }
        if (this.state.tasks[i].status[0] === 'Completed') {
          tasksCompleted += 1
        } else if (this.state.tasks[i].status[0] === 'On Going') {
          onGoingTasks += 1
        } else if (this.state.tasks[i].status[0] === 'Pending') {
          pendingTasks += 1
        }
      }

      const pieChart = [
        {
          name: 'High relevance',
          value: highRelevanceNumb
        },
        {
          name: 'Medium relevance',
          value: mediumRelevanceNumb
        },
        {
          name: 'Low relevance',
          value: lowRelevanceNumb
        }
      ]

      this.setState({ pieChart })
      this.setState({ tasksCompleted })
      this.setState({ onGoingTasks })
      this.setState({ pendingTasks })
    })
  }

  changeRefresh = async () => {
    await this.fetchData()
  }

  render () {
    return (
      <>
        <header style={{ width: '90%', marginLeft: '10%' }}><h1 style={{ textAlign: 'center' }}>Welcome in the Dashboard {this.props.user.firstname} </h1></header>
        <Stats
          token={this.props.token}
          id={this.props.id}
          colors={this.state.COLORS}
          tasks={this.state.tasks}
          tasksCompleted={this.state.tasksCompleted}
          onGoingTasks={this.state.onGoingTasks}
          pendingTasks={this.state.pendingTasks}
          pieChart={this.state.pieChart}
        />
        <UserTasks token={this.props.token} id={this.props.id} refresh={this.changeRefresh} />
      </>
    )
  }
}

export default Dashboard
