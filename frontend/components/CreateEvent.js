import React from 'react'
import axios from 'axios'
// import bulma from 'bulma'

// import auth from '../lib/auth'
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
        date: 0,
        userName: ''
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  handleSubmit(event) {
    event.preventDefault()
    axios.post('https://localhost:8000/api/events',
      this.state.data,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } }) 
      .then(res => this.props.history.push(`/event/${res.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
  render() {
    const { errors } = this.state
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Creat Event</h1>
          <EventForm
            handleSubmit={event => this.handleSubmit(event)}
            handleChange={event => this.handleChange(event)}
            errors={errors}
          />
        </div>
      </section>
    )
  }
}
export default CreateEvent
