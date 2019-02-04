import React, { Component } from 'react'
import Background from './components/Background'
import Body from './components/Body'
import './App.css'
import CardContent from './components/CardContent.js'

class App extends Component {

  state = {phases:[]}

  async componentDidMount() {
      const response = await fetch('http://localhost:3000/phases', {mode: 'cors'})
      const json = await response.json()
      this.setState({phases:json})
  }

  render() {
    return (
      <div className="App">

      <Background />
      <Body />

        <CardContent
        phases ={this.state.phases}
        />

      </div>
    )
  }
}

export default App
