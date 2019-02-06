import React, { Component } from 'react'
import {Button, Modal, Collapsible, CollapsibleItem} from 'react-materialize'
import './Body.css'
import Card from './Card'

class Body extends Component {
  render() {
    return (
      <main>
        <div className="bodyDiv">
          <div className="container">
            <div className='circle-wrapper'>
            <div className='circle-container'>

              {this.props.phases.map(phase=>
                <Card
                key = {phase.id}
                phase = {phase}
                />
              )}





              {/*
              <a href='#' className='deg45 '><img src='images/waxing-crescent.svg' /><span className="overlay-blue"></span></a>

              <a href='#' className='deg90'><img src='images/new.svg' /><span className="overlay-green"></span></a>

              <a href='#' class='deg135'><img src='images/waning-crescent.svg' /><span className="overlay-seafoam"></span></a>

              <a href='#' class='deg180'><img src='images/waning-quarter.svg' /><span className="overlay-coral"></span></a>

              <a href='#' class='deg225'><img src='images/waning-gibbous.svg' /><span className="overlay-red"></span></a>

              <a href='#' class='deg270'><img src='images/full.svg' /><span className="overlay-berry"></span></a>

              <a href='#' class='deg315'><img src='images/waxing-gibbous.svg' /><span className="overlay-lavendar"></span></a> */}

            </div>
            </div>
          </div>
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
      </main>
    )
  }
}

export default Body
