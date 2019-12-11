import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './App.css'
import Navbars from './components/Navbars'
import Dashboard from './components/Dashboard'
import Profil from './components/Profil'

class App extends Component {
  state = {
    id : this.props.location.state.id !== undefined ? this.props.location.state.id : '',
    pseudo : 'Jérémie',
    printedContent : 1
  }
  componentDidMount () {
  }

  changeContent = mode => {
    const printedContent = mode
    this.setState({printedContent})
  }

  contentDisplayed = () => {
    if (this.state.printedContent === 1) {
       return <Dashboard pseudo={this.state.pseudo}/>
    }
    else if (this.state.printedContent === 2) return <Profil />
  }

  render () {
    if (this.props.location.state.id === undefined) {
      return <Redirect push to='/' />
    }    

    return (
      <div className=''>
        <Navbars changeContent={this.changeContent}/>
        {this.contentDisplayed()}
      </div>
    )
  }
}

export default App
