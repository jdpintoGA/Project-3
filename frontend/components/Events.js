import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import addButton from '../images/add-icon.png'
import games from '../images/games-icon.png'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'



class Events extends React.Component {
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
    if (!this.state.games) {
      return null
    }
    // const { image } = this.state.games.featured_img_m
    return <div className="event-wrap-m">
      <NavBar />

      <section className="event-section-m">
        <div className="left-wrapper-m">
          <div className="container-top-left">
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
          </div>
          <div className="left-container-m">
            <Link className="container-events-m" to="/" >
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Games</div>
              </div>
            </Link>
            <Link className="container-events-m" to="/" >
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Events</div>
              </div>
            </Link>
            <Link className="container-events-m" to="/" >
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Tournaments</div>
              </div>
            </Link>
            <Link className="container-events-m" to="/" >
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Championships</div>
              </div>
            </Link>

          </div>
        </div>


        <div className="right-wrapper-m">
          <div className="container-nav-m">
            <Nav />
          </div>
          <div className="right-container-m">
            <div className="right-content-m">
              {this.state.games.map(game => {
                if (game.assets.featured_img_m === '') {
                  return null
                }
                return <div
                  key={game.game_id}
                  className="container-image-m">
                  <img src={game.assets.featured_img_m} alt="" />
                  <div className="container-platform-m">


                    <div className="container-region-m">

                    </div>

                  </div>
                </div>
              })}

            </div>
          </div>

        </div>
      </section>

    </div>
  }
}

export default Events