import React from 'react'
import { Link } from 'react-router-dom'
import logoFaceit from '../images/faceit.png'

const Footer = () => (

  <footer className="footer-m">
    <div className="faceit-logo-m" style={{ backgroundImage: `url(${logoFaceit})` }}>
      
    </div>
    <div className="git-container-links-m">
      <Link className="git-links-m" to="https://github.com/MariusZerni/MariusZerni.github.io" >Marius Zerni</Link>
      <Link className="git-links-m" >Gabi Antonica</Link>
      <Link className="git-links-m" >Joao Pinto</Link>
    </div>
  </footer>
)

export default Footer

