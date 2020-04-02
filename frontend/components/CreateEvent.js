import React from 'react'
import axios from 'axios'
import NavBar from './NavBar'

import auth from '../lib/auth'
import EventForm from './EventForm'

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        eventName: '',
        eventType: '',
        eventDescription: '',
        location: '',
        platform: '',
        date: ''
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log(this.state.data)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('/api/events', this.state.data, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      .then(() => this.props.history.push('/hub'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    const { errors } = this.state
    return (
      <div className="container-m">
        <NavBar />

        <div className="section-m loginPageJ">
          <div className="loginSectionJ">
            <div className="fillJ"></div>
            <div className="contentJ">
              <h1 className="title-g">Create Event</h1>
              <EventForm
                handleSubmit={event => this.handleSubmit(event)}
                handleChange={event => this.handleChange(event)}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent
