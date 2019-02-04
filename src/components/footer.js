import React from 'react';
import'../App.css';

const Footer = (props) => {

  return (
    <nav className="navbar-fixed">
      <div className="container">
        <a className="navbar-brand grey-text text-darken-5" href="#">&copy; {props.copyright}</a>
      </div>
    </nav>
  )
}


export default Footer;
