import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return <div className="container">
      <div className="svg">
        <svg viewBox="0 0 30 30" width="30">
          <path id="one" d="M4 10h22M4" stroke="#000" strokeWidth="4" strokeLinecap="round"></path>
          <path id="two" d="M4 20h22M4" stroke="#000" strokeWith="4" strokeLinecap="round"></path>
        </svg>
        <div className="nav">
          <nav>
            <h2>Menu</h2>
            <div className="nav-ul">
              <Link to="/events">EVENTS</Link>
              <Link to="/create">CREATE EVENT</Link>
              <Link to="/register">CREATE ACCOUNT</Link>
              <Link to="/login">LOG IN</Link>
            </div>
          </nav>
        </div>
        <section className="section">
          <div className="content">
            <div className="title">
              <h1>Home Page</h1>
            </div>
            <div className="content-page">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita. Aspernatur consectetur sapiente cupiditate debitis, consequatur eos quis quod maiores laboriosam ut nam aut ipsa quia veniam architecto modi temporibus.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  }
}

export default Home