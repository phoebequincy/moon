import React, { Component } from 'react'
import './Body.css'


class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div id="row1" className="row valign-wrapper">
            <div id="block1" className="col l2 offset-l5 teal center-align ">
              <img className="moonImage" src="images/full.png" />
            </div>
          </div>
          <div id="row2" className="row">
            <div className="col l3"></div>
            <div id="block2" className="col l2 teal center-align">
              <p>block 2</p>
            </div>
            <div className="col l2"></div>
            <div id="block3" className="col l2 teal center-align">
              <p>block 3</p>
            </div>
            <div className="col l3"></div>
          </div>

          <div id="row3" className="row">
          <div className="col l1"></div>
            <div id="block4" className="col l2 teal center-align">
              <p>block 4</p>
            </div>
            <div className="col l6"></div>
            <div id="block5" className="col l2 teal center-align">
              <p>block 5</p>
            </div>
            <div className="col l1"></div>
          </div>

          <div id="row4" className="row">
            <div className="col l3"></div>
            <div id="block6" className="col l2 teal center-align">
              <p>block 6</p>
            </div>
            <div className="col l2"></div>
            <div id="block7" className="col l2 teal center-align">
              <p>block 7</p>
            </div>
            <div className="col l3"></div>
          </div>

          <div id="row5" className="row">
            <div id="block8" className="col l2 offset-l5 teal center-align">
              <p>block 8</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
