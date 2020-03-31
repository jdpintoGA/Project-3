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
      currentSelection: 'Games',
      modalActive: false
    }
  }

  // eslint-disable-next-line camelcase
  handleClick(featured_img_m) {
    // eslint-disable-next-line camelcase
    axios.get(`https://open.faceit.com/data/v4/games?offset=0&limit=20/${featured_img_m}`, {
      headers: {
        Authorization: 'Bearer 9a6523cf-c46d-434c-b623-3daeefa1acdb'
      }
    })
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
      .get('https://api.pandascore.co/series?token=1wCqgz0G63stMjHHwN0Bn2itQVq1z2Pc7szHZNR4MHpGWqkDy5o')
      .then(res => {
        console.log(res.data)
        this.setState({ leagues: res.data, currentSelection: 'Leagues' })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {

    // console.log("componentDidMount")
    // this.fetchAllGames()

  }

  handleGames() {
    console.log('Fetching games')
    this.fetchAllGames()

  }

  handleLeagues() {
    this.fetchLeagues()

<<<<<<< HEAD

  renderEvents() {

    return <h1>Test</h1>
=======
>>>>>>> dev
  }


  renderLeagues() {
    var moment = require('moment')
    console.log('valid ' + moment("2020-04-09T22:00:00Z").isValid())

    if (!this.state.leagues) {
      return null
    }
    return <>
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
      {this.state.leagues.map(league => {
        if (league.name === '' || league.name === null) {
          return null
        }
        return <section
          key={league._id}
          className="leagues-section-m">

          <div className="div-league-m">
            <h3>{league.name}</h3>
          </div>
          <div className="div-tournaments-m">
            {league.tournaments.map(tournament => {

              return <>
                <div className="div-tts-name-m">
                  <h3 key={tournament._id}>Tournament: {tournament.name}</h3>

                </div>

              </>
            })}
          </div>
          <div className="div-tournaments-dates-m">
            {league.tournaments.map(tournament => {

              return <>
                <div className="div-date-m">
                  <h3>Start: <Moment format="YYYY/MM/DD">
                    {tournament.start_at}

                  </Moment>
                  </h3>
                  <h3>End: <Moment format="YYYY/MM/DD">
                    {tournament.end_at}
                  </Moment>
                  </h3>

                </div>
              </>
            })}
          </div>

        </section>
      })}

    </>
  }
  toggleModal() {
    const newModal = !this.state.modalActive
    this.setState({ modalActive: newModal })
  }




  render() {
<<<<<<< HEAD
    console.log('rendering')
=======
    // console.log('rendering')
>>>>>>> dev


    let component

    if (this.state.currentSelection === 'Games') {
      component = this.renderGames()
    } else if (this.state.currentSelection === 'Leagues') {
      component = this.renderLeagues()
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
            <div className="container-events-m"
              onClick={() => this.handleGames()}>

              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Games</div>
              </div>
            </div>
            <div className="container-events-m"
              onClick={() => this.handleEvents()}>
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Events</div>
              </div>
            </div>
            <div className="container-events-m"
              onClick={() => this.handleLeagues()}>
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Leagues</div>
              </div>
            </div>
            <div className="container-events-m"
              onClick={() => this.handleLiveGames()}>
              <div className="container-event-image-m" style={{ backgroundImage: `url(${games})` }}>
                <div className="events-links-m" >Now Live</div>
              </div>
            </div>

          </div>
        </div>


        <div className="right-wrapper-m">
          <div className="container-nav-m">
            <Nav />
          </div>
          <div className="right-container-m">

            {component}

          </div>

        </div>
      </section>
      {this.state.modalActive ? <GameModal
        long_label={this.state.singleGame.long_label}
        platforms={this.state.singleGame.platforms}
        regions={this.state.singleGame.regions}
        featured_img_l={this.state.singleGame.featured_img_l}
        toggleModal={() => this.toggleModal()} /> : null}

    </div>
  }

  renderGames() {
    if (!this.state.games) {
      // console.log('rendering -> null')
      return null
    }
    return <div className="right-content-m">
      {this.state.games.map(game => {
        if (game.assets.featured_img_m === '') {
          return null
        } else if (game.platforms === []) {
          return null
        }
        return <div
          key={game.game_id}
          className="container-image-m">
          <img src={game.assets.featured_img_m} alt="" />
          <div className="container-platform-m">
            <h3>Platform: {game.platforms}</h3>

            <h5>Region: {game.regions}</h5>

          </div>
        </div>
      })}

    </div>
  }

}




export default Events