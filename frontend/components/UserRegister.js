import React from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
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
      .post('http://localhost:8000/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
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
              <h1 className="title-m">Register</h1>
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event)}
              >
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="text"
                      name="email"
                      className="input"
                    />
                  </div>
                  {errors.email && (
                    <small className="help is-danger">{errors.email}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="text"
                      name="username"
                      className="input"
                    />
                  </div>
                  {errors.username && (
                    <small className="help is-danger">{errors.username}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="password"
                      name="password"
                      className="input"
                    />
                  </div>
                  {errors.password && (
                    <small className="help is-danger">{errors.password}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="password"
                      name="passwordConfirmation"
                      className="input"
                    />
                  </div>
                  {errors.passwordConfirmation && (
                    <small className="help is-danger">
                      {errors.passwordConfirmation}
                    </small>
                  )}
                </div>
                <button className="buttonJ">Register</button>
              </form>
            </div>
            <div className="fillJ"></div>
          </div>
          <div className="wrapRegisterJ">
            <div className="fillJ"></div>
            <div className="registerSectionJ">
              <div className="fillJ"></div>
              <div className="toRegJ">
                <h3>
                  Have an account? <Link to="/login"> Sign in </Link>
                  instead!
                </h3>
              </div>
              <div className="fillJ"></div>
            </div>
            <div className="fillJ"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
