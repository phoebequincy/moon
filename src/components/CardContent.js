import React from 'react'
import Card from './Card.js'
import './Body.css'

export default class CardContent extends React.Component {
  render(){
    console.log(this.props.phases)
    return (
    <div className="cards">
      {this.props.phases.map(phase=>
        <Card
        key = {phase.id}
        phase = {phase}
        />
      )}
    </div>
    )
  }
}
