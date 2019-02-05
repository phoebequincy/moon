import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo"><img src="images/moon-cycle-logo-pink.png" className="brand-logo-main-font gray-text m-l" alt="Logo"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <a href="#" className="waves-effect waves-light blue lighten-4 btn-small">Login</a>
                  </li>
                </ul>
            </div>
          </nav>
        )
    }
}

export default Header;
