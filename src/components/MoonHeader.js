import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize'
import './MoonHeader.css'
import Image from "../Navimages/moon-cycle-logo-white.png"

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

  var Img = <img src={Image} alt=""/>



      return (
        <Navbar className="Nav-bar head" brand={Img} right>
          <NavItem>Today's Moonphase: {this.state.currentMp.length>0? this.state.currentMp[0].Phase:null}</NavItem>
        </Navbar>
    )
  }
}

export default MoonHeader;
