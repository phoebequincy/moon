import React, { Component } from 'react'
import './components/MoonHeader.css'
import MoonHeader from './components/MoonHeader.js'
import Body from './components/Body';
import Footer from "./components/Footer";
// import CardContent from './components/CardContent.js';

class App extends Component {

state = {
  phases:[]
}
  async componentDidMount() {
    // const classArray=['deg0','deg45','deg90','deg135','deg180','deg225', 'deg270', 'deg315' ]
    const classArray=['newmoon','waxing-crescent','first-quarter','waxing-gibbous','full-moon','waning-gibbous','last-quarter','waning-crescent']

    const imgArray = [ 'images/newmoon.svg','images/waxing-crescent.svg','images/waxing-quarter.svg','images/waxing-gibbous.svg','images/full.svg','images/waning-gibbous.svg','images/waning-quarter.svg','images/waning-crescent.svg']

    const spanClass = ['overlay-pink','overlay-blue','overlay-green','overlay-seafoam','overlay-coral','overlay-red','overlay-berry','overlay-lavendar']

      const response = await fetch('http://localhost:3000/phases',{mode: 'cors'})
      const json = await response.json()
      let data = json.map((phase,i) => {
        return {
          ...phase,
            class: classArray[i],
            img: imgArray[i],
            overlay: spanClass[i]
        }
      })
      console.log(data)
      this.setState({ phases:data })
  }

  render() {
    return (
      <div className="App">
        <MoonHeader

        />
       <Body
        phases={this.state.phases}/>
        {/*<CardContent
        phases={this.state.phases}/>*/}

        {/*}<Footer copyright={2019}/>*/}
      </div>
    );
  }
}

export default App;
