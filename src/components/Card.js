import React from 'react'

export default class Card extends React.Component {

  render(){
    return (

      <div className="row">
         <div className="col s12 m6">
           <div className="card blue-grey darken-1">
             <div className="card-content white-text">
                 <span className="card-title">
                  {this.props.phase.title}
                 </span>
                 <span className="card-title">
                  {this.props.phase.phase}
                 </span>
                 <p>
                  {this.props.phase.phase}
                 </p>
                 <p>
                  {this.props.phase.description}
                 </p>
                 <p>
                  {this.props.phase.symptomatic_experince}
                 </p>
                 <p>
                  {this.props.phase.mindful_ways}
                 </p>
               </div>
             <div className="card-action">
               <a href="#">This is a link</a>
               <a href="#">This is a link</a>
             </div>
           </div>
         </div>
       </div>
     )
   }
}
