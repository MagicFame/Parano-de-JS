import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { PieChart, Pie, Cell } from 'recharts'

class Stats extends Component {
  state = {
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

  renderLabel = (entry) => {
    return entry.name
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
      this.setState({ tasks })

      let highRelevanceNumb = 0
      let mediumRelevanceNumb = 0
      let lowRelevanceNumb = 0
      let tasksCompleted = 0
      let onGoingTasks = 0
      let pendingTasks = 0
      for (let i = 0; i < this.state.tasks.length; i++){
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
        } else if (this.state.tasks[i].status[0] === 'pending') {
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
      this.setState({tasksCompleted})
      this.setState({onGoingTasks})
      this.setState({pendingTasks})
    })
  }

 render () {
  return (
    <div style={{ width: '90%', marginLeft: '10%' }}>
      <div align='center' className='card bg-dark text-white mx-auto' style={{ width: '85%', marginTop: '5%' }}>
        <div className='card-header'>
          <h1>Overview</h1>
        </div>
        <div className='row'>
          <div className='col-6' style={{ width: '90%' }}>
            <div className=' mx-auto' style={{ width: '80%', height: '100%', display: 'grid', verticalAlign: 'middle', marginTop: '5%' }}>
              <label htmlFor='completed'>Percentage of tasks completed</label>
              <ProgressBar id='completed' style={{ marginTop: '-8%' }} animated striped variant='success' now={parseInt((this.state.tasksCompleted / this.state.tasks.length) * 100)} key={1} label={parseInt((this.state.tasksCompleted / this.state.tasks.length) * 100) +'%'} /> 
              <label htmlFor='ongoing'>Percentage of on going tasks</label>
              <ProgressBar id='ongoing' style={{ marginTop: '-8%' }}animated striped variant='warning' now={(this.state.onGoingTasks / this.state.tasks.length) * 100} key={1} label={parseInt((this.state.onGoingTasks / this.state.tasks.length) * 100) +'%'}  />
              <label htmlFor='pending'>Percentage of pending tasks</label>
              <ProgressBar id='pending' style={{ marginTop: '-8%' }} animated variant='danger' now={(this.state.pendingTasks / this.state.tasks.length) * 100} key={1} label={parseInt((this.state.pendingTasks / this.state.tasks.length) * 100) +'%'}  />
            </div>
          </div>
          <div className='col-6'>
            <PieChart width={450} height={400} label>
              <Pie
                data={this.state.pieChart}
                cx='50%'
                cy='50%'
                outerRadius='50%'
                labelLine={false}
                label={this.renderLabel}
                dataKey='value'
                isAnimationActive={false}
              >
                {this.state.pieChart.map((entry, index) => (
                  <Cell fill={this.state.COLORS[index]} key={`cell-${index}`} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Stats
