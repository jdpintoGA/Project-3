import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import image from '../images/background-image.jpg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'



class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      games: null
    }
  }

  fetchAllGames() {
    axios.get('https://open.faceit.com/data/v4/games?offset=0&limit=20', { headers: { Authorization: 'Bearer 9a6523cf-c46d-434c-b623-3daeefa1acdb' } })
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
    console.log(this.state.games[0])
    return <div className="container-m">

      <NavBar />

      <section className="section-m" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-m">
          <div className="cre-acc-m">
            <Link className="link-HP-m" to="/register">Create Account</Link>
          </div>

          <div className="container-games-m">
            {
              this.state.games
                .filter(game => game.assets.featured_img_m !== '')
                .slice(8, 11).map(game => {

                  if (game.assets.featured_img_m === '') {
                    return null
                  }

                  return <div key={game.game_id} className="image-container-m">
                    <img src={game.assets.featured_img_m} alt="Placeholder image" />

                  </div>
                })}
          </div>
          
        </div>
        <Footer />
      </section>
      
    </div>
  }
}

export default Home