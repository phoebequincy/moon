import React, { Component } from 'react';

class Header extends Component {



    render() {
        return (
          <nav>
            <div className="nav-wrapper #e0f7fa cyan lighten-5">
              <a href="#" className="brand-logo main-font black-text m-s"></a>
              <a href="index.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

              <button className="btn waves-effect indigo lighten-2" type="submit" name="action">Login</button>

              <ul className="left hide-on-med-and-down">
                <li><a className="grey-text text-darken-5" href="#">Moon Cycle</a></li>
                  </ul>
                    <div className="mobilenav">
                      <ul className="sidenav" id="mobile-demo">
                  </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Header;
