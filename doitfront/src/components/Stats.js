import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { PieChart, Pie, Cell } from 'recharts'

class Stats extends Component {
  renderLabel = (entry) => {
    return entry.name
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
                <ProgressBar id='completed' style={{ marginTop: '-8%' }} animated striped variant='success' now={parseInt((this.props.tasksCompleted / this.props.tasks.length) * 100)} key={1} label={parseInt((this.props.tasksCompleted / this.props.tasks.length) * 100) + '%'} />
                <label htmlFor='ongoing'>Percentage of on going tasks</label>
                <ProgressBar id='ongoing' style={{ marginTop: '-8%' }}animated striped variant='warning' now={(this.props.onGoingTasks / this.props.tasks.length) * 100} key={2} label={parseInt((this.props.onGoingTasks / this.props.tasks.length) * 100) + '%'} />
                <label htmlFor='pending'>Percentage of pending tasks</label>
                <ProgressBar id='pending' style={{ marginTop: '-8%' }} animated variant='danger' now={(this.props.pendingTasks / this.props.tasks.length) * 100} key={3} label={parseInt((this.props.pendingTasks / this.props.tasks.length) * 100) + '%'} />
              </div>
            </div>
            <div className='col-6'>
              <PieChart width={500} height={400} label>
                <Pie
                  data={this.props.pieChart}
                  cx='50%'
                  cy='50%'
                  outerRadius='50%'
                  labelLine={false}
                  label={this.renderLabel}
                  dataKey='value'
                >
                  {this.props.pieChart.map((entry, index) => (
                    <Cell fill={this.props.colors[index]} key={`cell-${index}`} />
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
