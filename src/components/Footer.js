import React from 'react';
import'../App.css';
import './Body.css'

const Footer = (props) => {

  return (
    <footer className="footer">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand grey-text text-darken-5">&copy; {props.copyright}
          </div>
        </div>
      </nav>
    </footer>
  )
}


export default Footer;
