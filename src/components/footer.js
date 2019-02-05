import React from 'react';
import'../App.css';

const Footer = (props) => {

  return (

    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand grey-text text-darken-5">&copy; {props.copyright}
        </div>
      </div>
    </nav>
  )
}


export default Footer;
