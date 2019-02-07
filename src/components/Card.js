import React from 'react'
import {Button, Modal, Collapsible, CollapsibleItem} from 'react-materialize'

const modalStyling = {
  fontFamily: 'PT Sans',
  fontSize: '15px',
  textAlign: 'left',
}

export default class Card extends React.Component {

  idString = () => {
    this.props.phase.id.toString()
  }

  render(){
    return (
      <Modal
        style = {modalStyling}
        header={this.props.phase.title}
        trigger={<a href='#' className={this.props.phase.class}><img src={this.props.phase.img}/><span className={this.props.phase.overlay}>
        </span></a>}id = {this.idString()}>
        <Collapsible>
          <CollapsibleItem className='active' header={this.props.phase.phase} icon='brightness_1'>{this.props.phase.description}</CollapsibleItem>
          <CollapsibleItem header='Symptomatic Experience' icon='brightness_2'>
            {this.props.phase.symptomatic_experience}
          </CollapsibleItem>
          <CollapsibleItem header='Mindful Ways' icon='brightness_3'>{this.props.phase.mindful_ways}
          </CollapsibleItem>
        </Collapsible>
      </Modal>
     )
   }
}
