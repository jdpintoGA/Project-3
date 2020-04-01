import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment'

import addButton from '../images/add-icon.png'
import games from '../images/games-icon.png'
import NavBar from '../components/NavBar'
import Nav from '../components/Nav'
import GameModal from '../components/GameModal'

class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      games: null,
      events: null,
      localEvents: [{ user: { username: '' } }],
      users: [],
      currentSelection: 'Games',
      modalActive: false
    }
  }

  // eslint-disable-next-line camelcase
  handleClick(featured_img_m) {
    // eslint-disable-next-line camelcase
    axios
      .get(
        `https://open.faceit.com/data/v4/games?offset=0&limit=20/${featured_img_m}`,
        {
          headers: {
            Authorization: 'Bearer 9a6523cf-c46d-434c-b623-3daeefa1acdb'
          }
        }
      )
      .then(response => {
        this.setState({ singleGame: response.data })
        this.toggleModal()
      })
  }

  fetchAllGames() {
    // console.log('Fetching')
    axios
      .get('https://open.faceit.com/data/v4/games?offset=0&limit=20', {
        headers: {
          Authorization: 'Bearer 9a6523cf-c46d-434c-b623-3daeefa1acdb'
        }
      })
      .then(res => {
        this.setState({ games: res.data.items, currentSelection: 'Games' })
      })
      .catch(error => console.error(error))
  }

  fetchLeagues() {
    console.log('Fetching leagues')
    axios
      .get(
        'https://api.pandascore.co/series?token=1wCqgz0G63stMjHHwN0Bn2itQVq1z2Pc7szHZNR4MHpGWqkDy5o'
      )
      .then(res => {
        console.log(res.data)
        this.setState({ leagues: res.data, currentSelection: 'Leagues' })
      })
      .catch(error => console.error(error))
  }

  //local events
  fetchLocalEvents() {
    // console.log('Fetching Local Events')
    axios
      .get('/api/events')
      .then(res => {
        this.setState({
          localEvents: res.data,
          currentSelection: 'LocalEvents'
        })
        // console.log(res.data)
      })
      .catch(error => console.error(error))
  }

  //users
  // fetchUsers() {
  //   console.log('User Db Tracked. Commence matching!')
  //   axios
  //     .get('/api/users')
  //     .then(res => {
  //       this.setState({
  //         users: res.data
  //       })
  //     })
  //     .catch(error => console.error(error))
  // }

  componentDidMount() {
    // console.log("componentDidMount")
    // this.fetchAllGames()
  }

  handleLocalEvents() {
    console.log('Handling Local Events')
    // this.fetchUsers()
    this.fetchLocalEvents()
  }

  handleGames() {
    console.log('Fetching games')
    this.fetchAllGames()
  }

  handleLeagues() {
    this.fetchLeagues()
  }

  renderLeagues() {
    var moment = require('moment')
    console.log('valid ' + moment('2020-04-09T22:00:00Z').isValid())

    if (!this.state.leagues) {
      return null
    }
    return (
      <>
        <div className="leagues-topbar-m">
          <div id="leagues-name-m">
            <h2>Leagues</h2>
          </div>
          <div className="leagues-name-m">
            <h2>Tournaments Name</h2>
          </div>
          <div className="leagues-name-m">
            <h2>Tournaments Date</h2>
          </div>
        </div>
        {this.state.leagues.map((league, i) => {
          if (league.name === '' || league.name === null) {
            return null
          }
          return (
            <section key={i} className="leagues-section-m">
              <div className="div-league-m">
                <h3>{league.name}</h3>
              </div>
              <div className="div-tournaments-m">
                {league.tournaments.map((tournament, i) => {
                  return (
                    <>
                      <div key={i} className="div-tts-name-m">
                        <h3>Tournament: {tournament.name}</h3>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="div-tournaments-dates-m">
                {league.tournaments.map((tournament, i) => {
                  return (
                    <>
                      <div key={i} className="div-date-m">
                        <h3>
                          Start:{' '}
                          <Moment format="YYYY/MM/DD">
                            {tournament.start_at}
                          </Moment>
                        </h3>
                        <h3>
                          End:{' '}
                          <Moment format="YYYY/MM/DD">
                            {tournament.end_at}
                          </Moment>
                        </h3>
                      </div>
                    </>
                  )
                })}
              </div>
            </section>
          )
        })}
      </>
    )
  }
  toggleModal() {
    const newModal = !this.state.modalActive
    this.setState({ modalActive: newModal })
  }

  render() {
    // console.log('rendering')

    let component

    if (this.state.currentSelection === 'Games') {
      component = this.renderGames()
    } else if (this.state.currentSelection === 'Leagues') {
      component = this.renderLeagues()
    } else if (this.state.currentSelection === 'LocalEvents') {
      component = this.renderLocalEvents()
    }

    // const { image } = this.state.games.featured_img_m
    return (
      <div className="event-wrap-m">
        <NavBar />

        <section className="event-section-m">
          <div className="left-wrapper-m">
            <div className="container-top-left">
              <div className="border-navbar-left-m"></div>
              <div className="btn-add-m">
                <div
                  className="add-image-m"
                  style={{ backgroundImage: `url(${addButton})` }}
                ></div>
                <div className="container-links-m">
                  <Link className="sub-links-m" to="/create">
                    Add Event
                  </Link>
                  <Link className="sub-links-m" to="/create">
                    Edit Event
                  </Link>
                  <Link className="sub-links-m" to="/create">
                    Add Game
                  </Link>
                  <Link className="sub-links-m" to="/create">
                    Add Tournament
                  </Link>
                </div>
              </div>
            </div>
            <div className="left-container-m">
              <div
                className="container-events-m"
                onClick={() => this.handleGames()}
              >
                <div
                  className="container-event-image-m"
                  style={{ backgroundImage: `url(${games})` }}
                >
                  <div className="events-links-m">Games</div>
                </div>
              </div>
              <div
                className="container-events-m"
                onClick={() => this.handleLocalEvents()}
              >
                <div
                  className="container-event-image-m"
                  style={{ backgroundImage: `url(${games})` }}
                >
                  <div className="events-links-m">Events</div>
                </div>
              </div>
              <div
                className="container-events-m"
                onClick={() => this.handleLeagues()}
              >
                <div
                  className="container-event-image-m"
                  style={{ backgroundImage: `url(${games})` }}
                >
                  <div className="events-links-m">Leagues</div>
                </div>
              </div>
              <div
                className="container-events-m"
                onClick={() => this.handleLiveGames()}
              >
                <div
                  className="container-event-image-m"
                  style={{ backgroundImage: `url(${games})` }}
                >
                  <div className="events-links-m">Now Live</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-wrapper-m">
            <div className="container-nav-m">
              <Nav />
            </div>
            <div className="right-container-m">{component}</div>
          </div>
        </section>
        {this.state.modalActive ? (
          <GameModal
            long_label={this.state.singleGame.long_label}
            platforms={this.state.singleGame.platforms}
            regions={this.state.singleGame.regions}
            featured_img_l={this.state.singleGame.featured_img_l}
            toggleModal={() => this.toggleModal()}
          />
        ) : null}
      </div>
    )
  }

  renderGames() {
    if (!this.state.games) {
      // console.log('rendering -> null')
      return null
    }
    return (
      <div className="right-content-m">
        {this.state.games.map(game => {
          if (game.assets.featured_img_m === '') {
            return null
          } else if (game.platforms === []) {
            return null
          }
          return (
            <div key={game.game_id} className="container-image-m">
              <img src={game.assets.featured_img_m} alt="" />
              <div className="container-platform-m">
                <h3>Platform: {game.platforms}</h3>

                <h5>Region: {game.regions}</h5>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  renderLocalEvents() {
    console.log(this.state.localEvents)
    if (!this.state.localEvents) {
      return null
    }
    return (
      <>
        <div className="leagues-topbar-j">
          <div className="events-top-j">
            <h2>Event</h2>
          </div>
          <div className="events-top-j">
            <h2>Platform</h2>
          </div>
          <div className="events-top-j">
            <h2>Host</h2>
          </div>
          <div className="events-top-j">
            <h2>Date</h2>
          </div>
          <div className="join-j">
            <h2>Join</h2>
          </div>
        </div>
        {this.state.localEvents.map((event, i) => {
          // if (event.platform === '') {
          //   return null
          // } else if (event.location === '') {
          //   return null
          // }
          return (
            <div key={i} className="leagues-section-j">
              <div className="cell-bar-j">
                <div className="div-cell-j">
                  <h5>{event.eventName}</h5>
                </div>
                <div className="div-cell-j">
                  <h5>{event.platform}</h5>
                </div>
                <div className="div-cell-j">
                  <h5>{event.user.username}</h5>
                </div>
                <div className="div-cell-j">
                  <h5>
                    <Moment format="YYYY/MM/DD">{event.date}</Moment>
                  </h5>
                </div>
                <div className="div-cell-j">
                  <button className="btn"> † </button>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }
}

export default Events
