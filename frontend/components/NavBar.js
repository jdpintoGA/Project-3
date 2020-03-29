import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'

const NavBar = () => {
  // const handleLogout = auth.logout()

  //must call isLoggedin() here so every time the navBar renders it will call isLoggedIn!!! if i put on top it will only get called once when the app is first loaded up
  const isLoggedIn = auth.isLoggedIn() //so isLoggedIn would either be false or true depending if user is loggedin
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
          <Link className="link-m" to="/events">
            EVENTS
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
          <br />
          <br />
          <br />
          {isLoggedIn && (
            <Link className="link-m" onClick={() => auth.logout()}>
              LOG OUT
            </Link>
          )}
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar
