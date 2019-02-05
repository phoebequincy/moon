import React, { Component } from 'react';
import Body from './components/Body';
import './App.css';
import CardContent from './components/CardContent.js';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {

  state = {phases:[]}

  async componentDidMount() {
      const response = await fetch('http://localhost:3000/phases',{mode: 'cors'})
      const json = await response.json()
      this.setState({ phases:json })
  }

  render() {
    return (
      <div className="App">
       <Header/>
       <Body/>
        <CardContent
        phases={this.state.phases}
        />
        <Footer copyright={2019}/>

      </div>
    )}


}
export default App;
