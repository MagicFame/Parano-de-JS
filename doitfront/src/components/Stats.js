import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { PieChart, Pie, Cell } from 'recharts'

const Stats = () => {
  
  // TO DO : Data mockée, modifier avec les bonne données
  const data01 = [
    {
      name: 'High relevance',
      value: 50
    },
    {
      name: 'Medium relevance',
      value: 700
    },
    {
      name: 'Low relevance',
      value: 700
    }
  ]

  const COLORS = [
    '#65d3da',
    '#79d69f',
    '#fad144'
  ]

  let renderLabel = function (entry) {
    return entry.name
  }

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
              <ProgressBar id='completed' style={{ marginTop: '-8%' }} animated striped variant='success' now={20} key={1} label='20%' /> {/* TODO : Modifier les pourcentages affiché pour qu'ils correspondent aux vrais valeurs */}
              <label htmlFor='ongoing'>Percentage of on going tasks</label>
              <ProgressBar id='ongoing' style={{ marginTop: '-8%' }}animated striped variant='warning' now={60} label='60%' />
              <label htmlFor='pending'>Percentage of pending tasks</label>
              <ProgressBar id='pending' style={{ marginTop: '-8%' }} animated variant='danger' now={80} label='80%' />
            </div>
          </div>
          <div className='col-6'>
            <PieChart width={450} height={400} label>
              <Pie
                data={data01}
                cx='50%'
                cy='50%'
                outerRadius='50%'
                labelLine={false}
                label={renderLabel}
                dataKey='value'
                isAnimationActive={false}
              >
                {data01.map((entry, index) => (
                  <Cell fill={COLORS[index]} key={`cell-${index}`} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
