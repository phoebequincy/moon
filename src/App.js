
import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { Component } from 'react'
import Body from './components/Body'
import './App.css'
import CardContent from './components/CardContent.js'



class App extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                  <div className="App-header">
                    <Header



class App extends Component {

  state = {phases:[]}

  // async componentDidMount() {
  //     const response = await fetch('http://localhost:3000/phases',{mode: 'cors'})
  //     const json = await response.json()
  //     this.setState({ phases:json })
  // }

  render() {
    return (
      <div className="App">

            <Body />

            <CardContent
            phases ={this.state.phases}
            />
      </div>
    )
  }
}
>>>>>>> 8448c541bbb14436a61f98b01c9e5461b7e66f2c

                    />
                  </div>

                </div>
                  <Footer
                    copyright={2019}
                  />
            </div>

        );
    }
}
export default App;
