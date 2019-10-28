import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><img src="https://cdn.pixabay.com/photo/2017/01/31/14/26/ballerina-2024547__340.png" /></Link>

            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link to="/about" className="navbar-item">About</Link>
              <Link to="/classes" className="navbar-item">Classes</Link>
            </div>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar
