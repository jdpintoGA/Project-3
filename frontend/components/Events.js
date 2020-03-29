import React from 'react'
import { Link } from 'react-router-dom'

import addButton from '../images/add-icon.png'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'



const Events = () => {

  return <div className="event-wrap-m">
    <NavBar />

    <section className="event-section-m">
      <div className="left-wrapper-m">
        <div className="border-navbar-left-m"></div>
        <div className="btn-add-m">
          <div className="add-image-m" style={{ backgroundImage: `url(${addButton})` }}>
          </div>
          <div className="container-links-m">
            <Link className="sub-links-m" to="/create" >Add Event</Link>
            <Link className="sub-links-m" to="/create" >Edit Event</Link>
            <Link className="sub-links-m" to="/create" >Add Game</Link>
            <Link className="sub-links-m" to="/create" >Add Tournament</Link>
          </div>
        </div>
        <div className="left-container-m">
        </div>
      </div>


      <div className="right-wrapper-m">
        <div className="right-container-m">
          <Nav />

        </div>
      </div>
    </section>

  </div>
}

export default Events