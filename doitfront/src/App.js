import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    uid : this.props.location.state !== undefined ? this.props.location.state.uid : '',
    pseudo : 'Jérémie'
  }
  componentDidMount () {
  }

  render () {
    if (this.props.location.state === undefined) {
      return <Redirect push to='/' />
    }

    return (
      <div className='container'>
        <Navbar pseudo={this.state.pseudo}/>
      </div>
    )
  }
}

export default App
