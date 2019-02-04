import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

    render() {
        return (
          <nav>
            <div className= "container">
              <div className="nav-wrapper">
                <img src="images/moon-cycle-logo-pink.png" className="brand-logo-main-font gray-text m-l" alt="Logo"/>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                </ul>
              </div>
              </div>
            </nav>
        )
    }
}

export default Header;
