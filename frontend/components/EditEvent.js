import React from 'react'
import auth from '../lib/auth'
import EventForm from '../components/EventForm'
import axios from 'axios'

class EditEvent extends React.Component {
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
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios
      .get(`https://localhost:8000/api/event/${id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    const id = this.props.match.params.id
    axios
      .put(`https://localhost:8000/api/event/${id}`, this.state.data, {
        headers: { Authorization: `Bearer ${auth.getToken()}` }
      })
      .then(res => this.props.history.push(`/event/${res.data._id}`))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Edit Event</h1>
          <EventForm
            handleSubmit={event => this.handleSubmit(event)}
            handleChange={event => this.handleChange(event)}
            errors={{}}
            data={this.state.data}
          />
        </div>
      </section>
    )
  }
}

export default EditEvent
