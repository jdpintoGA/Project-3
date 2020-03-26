import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  

  return <React.Fragment>
    <input type="checkbox" id="check" />
    <label htmlFor="check">
      <svg viewBox="0 0 30 30" width="30">
        <path id="one" d="M4 10h22M4" stroke="rgb(255 255 255)" strokeWidth="4" strokeLinecap="round"></path>
        <path id="two" d="M4 20h22M4" stroke="rgb(255 255 255)" strokeWidth="4" strokeLinecap="round"></path>
      </svg>
    </label>

    <nav className="nav">
      <h2>Menu</h2>
      <div className="nav-ul">
        <Link className="link" to="/events">EVENTS</Link>
        <Link className="link" to="/create">CREATE EVENT</Link>
        <Link className="link" to="/register">CREATE ACCOUNT</Link>
        <Link className="link" to="/login">LOG IN</Link>
      </div>
    </nav>
  </React.Fragment>

}

export default NavBar