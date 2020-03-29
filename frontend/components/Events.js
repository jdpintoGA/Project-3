import React from 'react'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'



const Events = () => {
 
  return <div className="event-wrap-m">
    <NavBar />

    <section className="event-section-m">
      <div className="left-wrapper-m">
        <div className="left-container-m">
          <h1>Left</h1>
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