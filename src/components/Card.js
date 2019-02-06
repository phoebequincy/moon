import React from 'react'
import {Button, Modal, Collapsible, CollapsibleItem} from 'react-materialize'


export default class Card extends React.Component {

  idString = () => {
    this.props.phase.id.toString()
  }



  render(){
    return (

      <Modal
        header={this.props.phase.title}
        trigger={<a href='#' className={this.props.phase.class}><img src={this.props.phase.img} /><span className={this.props.phase.overlay}></span></a>}

        id = {this.idString()}>




        <Collapsible>

          <CollapsibleItem className='active' header={this.props.phase.phase} icon='place'>
              {this.props.phase.description}
          </CollapsibleItem>

          <CollapsibleItem header='Symptomatic Experience' icon='whatshot'>
            {this.props.phase.symptomatic_experience}
          </CollapsibleItem>

          <CollapsibleItem header='Mindful Ways' icon='whatshot'>

            {this.props.phase.mindful_ways}
          </CollapsibleItem>

        </Collapsible>

      </Modal>
     )
   }
}
