import React, { Component } from 'react';

class Header extends Component {

  render () {

    


    return (
      <nav className="navbar navbar-dark bg-secondary">
        <form className="form-inline my-2 my-lg-0">
          <div className="navbar-brand">Batman's Messages</div>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.props.handleSearch}
            />
        </form>
        <button className="btn btn-success"
        onClick={this.props.composeShowHide}>+
      </button>
      </nav>
    )
  }
}
export default Header;
