import React from 'react'
import image from '../images/background.gif'
import NavBar from '../components/NavBar'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return <div className="container">

      <NavBar />

      <section className="section" style={{ backgroundImage: `url(${image})` }}>

        <div className="content">
          <div className="description">
            <div className="title">
              <h1>Home Page</h1>
            </div>
            <div className="content-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita. Aspernatur consectetur sapiente cupiditate debitis, consequatur eos quis quod maiores laboriosam ut nam aut ipsa quia veniam architecto modi temporibus.</p>
            </div>
          </div>
          <div className="container-event">
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
    // </div>
  }
}

export default Home