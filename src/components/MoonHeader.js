import React, { Component } from 'react'
import '../App.css'
import {Navbar, NavItem, Icon} from 'react-materialize'
import Image from "../Images/moon-cycle-logo-pink.png"


  class MoonHeader extends Component {

  state = {
    currentMp: []
  }

    async componentDidMount() {
        const ts = await Math.round((new Date()).getTime() / 1000)
        const response = await fetch(`http://api.farmsense.net/v1/moonphases/?d=${ts}`)
        const json = await response.json()
      this.setState({currentMp: json} )
    }

    moonData = () => {
    return this.state.currentMp.map((p, i) =>{
      return <MoonHeader {...p} key={i} />
    })
  }


  render() {

  var Img = <img src={Image}/>


      return (
        <Navbar className="Nav-bar" brand={Img} right>
          <NavItem>Today's Moonphase: {this.state.currentMp.length>0? this.state.currentMp[0].Phase:null}</NavItem>
        </Navbar>
    )
  }
}

export default MoonHeader;
