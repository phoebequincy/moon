import React, { Component } from 'react'
import Background from './components/Background'
import Body from './components/Body'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Background />
      <Body />
      </div>
    )
  }
}

export default App
