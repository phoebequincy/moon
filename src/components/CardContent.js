import React from 'react'
import Card from './Card.js'

export default class CardContent extends React.Component {
  render(){
    console.log(this.props.phases)
    return (
    <div>
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
