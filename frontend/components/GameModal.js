/* eslint-disable camelcase */
import React from 'react'

// eslint-disable-next-line camelcase
const GameModal = ({ long_label, platforms, regions, featured_img_l, toggleModal }) => {
  return (<div className="modal is-active">
    <div className="modal-background" onClick={toggleModal}></div>
    <div className="modal-content" id="blah">
      <figure className="image is-128x128">
        <img src={(featured_img_l)} />
      </figure>
      <h1> {(long_label).toUpperCase()} </h1>
      <h3> {(platforms).toUpperCase()} </h3>
      <h3> {(regions).toUpperCase()} </h3>
      
      <h3>Comments</h3>
  
    </div>
    <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
  </div>
  )
}

export default GameModal