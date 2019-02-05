import React, { Component } from 'react'
import '../App.css'
import {Navbar, NavItem} from 'react-materialize'


class Header extends Component {

    render() {
        return (
          <Navbar brand='logo' right>
            <div className="nav-wrapper">
            <NavItem href='<img src="images/moon-cycle-logo-pink.png" className="brand-logo-main-font gray-text m-l" alt="Logo"
            </NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><a href="#" className="waves-effect waves-light blue lighten-4 btn-small">Login</a></NavItem>
            <div>
          </Navbar>
        )
    }
}

export default Header;
