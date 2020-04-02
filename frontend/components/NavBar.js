import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  handleLogout() {
    auth.logout()
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()
    console.log('loggedIn' + isLoggedIn)
    return (
      <React.Fragment>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <svg viewBox="0 0 30 30" width="30">
            <path
              id="one"
              d="M4 10h22M4"
              stroke="rgb(255 255 255)"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
            <path
              id="two"
              d="M4 20h22M4"
              stroke="rgb(255 255 255)"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
        </label>

        <nav className="nav-m">
          <div className="nav-ul-m">
            <Link className="link-m" to="/">
              HOME
            </Link>
            <Link className="link-m" to="/hub">
              HUB
            </Link>
            {isLoggedIn && (
              <Link className="link-m" to="/create">
                CREATE EVENT
              </Link>
            )}
            {!isLoggedIn && (
              <Link className="link-m" to="/register">
                CREATE ACCOUNT
              </Link>
            )}
            {!isLoggedIn && (
              <Link className="link-m" to="/login">
                LOG IN
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to="/"
                onClick={() => this.handleLogout()}
                className="link-m"
              >
                LOG OUT
              </Link>
            )}
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar
