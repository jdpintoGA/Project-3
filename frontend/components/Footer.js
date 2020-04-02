import React from 'react'
import { Link } from 'react-router-dom'
import logoFaceit from '../images/faceit2.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Footer = () => (

  <footer className="footer-m">
    <div className="faceit-logo-m" style={{ backgroundImage: `url(${logoFaceit})` }} >



    </div>
    <div className="git-container-links-m">
      <div className="git-links-m">
        <div className="name-placeholder-m">
          Marius Zerni
        </div>
        <div className="linksgit-m">
          <Link to="//github.com/MariusZerni"
            target="_blank"  >
            <img src={github} alt="Image" />
          </Link>
          <Link to="//linkedin.com/in/marius-zerni-6a0786151/"
            target="_blank"  >
            <img src={linkedin} alt="Image" />
          </Link>
        </div>
      </div>
      <div className="git-links-m">
        <div className="name-placeholder-m">
          Gabi Antonica
        </div>
        <div className="linksgit-m">
          <Link to="//github.com/bababumBab" 
            target="_blank"  >
            <img src={github} alt="Image" />
          </Link>
          <Link to="//linkedin.com/in/gabrielantonica/"
            target="_blank"  >
            <img src={linkedin} alt="Image" />
          </Link>
        </div>
      </div>
      <div className="git-links-m">
        <div className="name-placeholder-m">
          Joao Pinto
        </div>
        <div className="linksgit-m">
          <Link to="//github.com/jdpintoGA"
            target="_blank"  >
            <img src={github} alt="Image" />
          </Link>
          <Link to="//linkedin.com/in/joão-pinto-b366a61a1"
            target="_blank"  >
            <img src={linkedin} alt="Image" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

