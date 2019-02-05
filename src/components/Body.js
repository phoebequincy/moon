import React, { Component } from 'react'
import './Body.css'
import './Background.css'



class Body extends Component {
  render() {
    return (
      <div>
      <div className="bodyDiv">
        <div className="container">
        <div className='circle-container'>
          <a href='#' className='deg0'><img src='images/waxing-quarter.svg' /><span className="overlay"></span></a>
          <a href='#' className='deg45'><img src='images/waxing-crescent.svg' /><span className="overlay"></span></a>
          <a href='#' className='deg90'><img src='images/new.svg' /><span className="overlay"></span></a>
          <a href='#' class='deg135'><img src='images/waning-crescent.svg' /><span className="overlay"></span></a>
          <a href='#' class='deg180'><img src='images/waning-quarter.svg' /><span className="overlay"></span></a>
          <a href='#' class='deg225'><img src='images/waning-gibbous.svg' /><span className="overlay"></span></a>
          <a href='#' class='deg270'><img src='images/full.svg' /><span className="overlay"></span></a>
          <a href='#' class='deg315'><img src='images/waxing-gibbous.svg' /><span className="overlay"></span></a>
        </div>
        </div>
        </div>

          <div className="stars"></div>
          <div className="twinkling"></div>
      </div>
    )
  }
}

export default Body
