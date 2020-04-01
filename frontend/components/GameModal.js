/* eslint-disable camelcase */
import React from 'react'
import 'bulma'


// eslint-disable-next-line camelcase
const GameModal = ({ long_label, cover, platforms, regions, featured_img_m, toggleModal }) => {
  return (<div className="modal is-active">
    <div className="modal-background" onClick={toggleModal}></div>
    <div className="modal-card" >
      <div className="modal-content" id="blah" >
        <header className="modal-card-head" id="blah2">
          
          <h1> Game: {(long_label).toUpperCase()} </h1>
        </header>
        <img src={(cover)} alt={(cover)} />
        
        
        

        <h3 id="blah2"> Platform: {platforms}</h3>
        <h3 id="blah2"> Region: {(regions)} </h3>
        <img id="blah3" src={(featured_img_m)}/>
      </div>
    </div>
    
    <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
  </div>
  )
}

export default GameModal