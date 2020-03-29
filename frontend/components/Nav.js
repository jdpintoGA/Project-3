import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'



class Nav extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleLogout() {
    console.log('log')
    auth.logout()
    //this.props.history.push('/')
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()
    return <>
      <div className="navbar-events-m">

        {isLoggedIn && <div className="cre-acc-m">
          <Link className="link-nav-m" to="/"
            onClick={() => this.handleLogout()}>
            Log Out
          </Link>
        </div>}

        {!isLoggedIn && <div className="cre-acc-m">
          <Link className="link-nav-m" to="/register">
            Create Account
          </Link>
        </div>}
        {!isLoggedIn && <div className="cre-acc-m">
          <Link className="link-nav-m" to="/login">
            Log In
          </Link>
        </div>}
      </div>


      <div className="border-navbar-m">
      </div>


    </>
  }

}

export default Nav