import React from 'react'
import { Link } from 'react-router-dom'
import logoFaceit from '../images/faceit2.png'


const Footer = () => (

  <footer className="footer-m">
    <div className="faceit-logo-m" style={{ backgroundImage: `url(${logoFaceit})` }} >



    </div>
    <div className="git-container-links-m">
      <Link className="git-links-m" to="//github.com/MariusZerni/MariusZerni.github.io" target="_blank" >Marius Zerni</Link>
      <Link className="git-links-m" to="//github.com/jdpintoGA" target="_blank" >Gabi Antonica</Link>
      <Link className="git-links-m" to="//github.com/bababumBab" target="_blank" >Joao Pinto</Link>
    </div>
  </footer>
)

export default Footer

