import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import events from '../images/events.png'
import game from '../images/game.png'
import league from '../images/league.png'
import live from '../images/live1.png'
import image from '../images/background-image.jpg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      games: null
    }
  }

  fetchAllGames() {
    axios
      .get('https://open.faceit.com/data/v4/games?offset=0&limit=20', {
        headers: {
          Authorization: 'Bearer 9a6523cf-c46d-434c-b623-3daeefa1acdb'
        }
      })
      .then(res => {
        this.setState({ games: res.data.items })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.fetchAllGames()
  }

  render() {

    return (
      <div className="container-m">
        <NavBar />

        <section
          className="section-m"
          style={{ backgroundImage: `url(${image})` }}
        >
          <Nav />

          <div className="container-home-m">
            <div className="gamepng-m">
              <Link
                to={{ pathname: '/hub', state: { currentSelection: 'Games' } }}> <img src={game} alt="Image" />
              </Link>
              <p>Find latest games</p>
            </div>
            <div className="gamepng-m">
              <Link
                to={{ pathname: '/hub', state: { currentSelection: 'LocalEvents' } }}> <img src={events} alt="Image" />
              </Link>

              <p>Create events</p>
            </div>
            <div className="gamepng-m">
              <Link
                to={{ pathname: '/hub', state: { currentSelection: 'Leagues' } }}> <img src={league} alt="Image" />
              </Link>

              <p>Find leagues</p>
            </div>
            <div className="gamepng-m">
              <Link
                to={{ pathname: '/hub', state: { currentSelection: 'LiveGames' } }}> <img src={live} alt="Image" />
              </Link>
              
              <p>Watch live games</p>
            </div>

          </div>

          <Footer />
        </section>
      </div>
    )
  }
}

export default Home
