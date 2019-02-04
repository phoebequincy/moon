import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {

  

    render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div>
            <Header

            />
          </div>
          <div>
            <Footer

            />
          </div>
        </div>
      </div>
    );
  }
}

export default App
