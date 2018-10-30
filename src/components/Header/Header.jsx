import React, { Component } from 'react'
import './Header.css'
class Header extends Component {
  render() {
    return <header>
        <div className="header-logo">Host</div>
        <div className="header-content">
          <input type="text" />
          <div className="account">
            <p>ACCOUNT</p>
            <p>en</p>
          </div>
        </div>
      </header>;
  }
}

export default Header
