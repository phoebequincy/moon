import React from 'react'
import {Button, Modal, Collapsible, CollapsibleItem} from 'react-materialize'


export default class Card extends React.Component {

  render(){
    return (

      <Modal
        header={this.props.phase.title}
        trigger={<a href='#' className='deg0'><img src='images/waxing-quarter.svg' /><span className="overlay-pink"></span></a>}

        trigger={<Button>{this.props.phase.title}</Button>}>

        <Collapsible>
          <CollapsibleItem header={this.props.phase.phase} icon='place'>
              {this.props.phase.description}
          </CollapsibleItem>

          <CollapsibleItem header='Description' icon='whatshot'>
            {this.props.phase.description}
          </CollapsibleItem>

          <CollapsibleItem header='Symptomatic Experince' icon='whatshot'>
            {this.props.phase.symptomatic_experience}
          </CollapsibleItem>

        </Collapsible>

      </Modal>
      
     )
   }
}
