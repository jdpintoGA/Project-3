import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

// import auth from '../../backend/config/environment'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8000/login', this.state.data)
      .then(res => {
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/home')
      })
      .catch(err => this.setState({ error: err.response.data.message }))
  }

  render() {
    const { error } = this.state
    return (
      <div className="container">
        <NavBar />
        <div className="section loginPageJ">
          <div className="loginSectionJ">
            <div className="fillJ"></div>
            <div className="contentJ">
              <h1 className="loginTitleJ">Login</h1>
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event)}
              >
                <div className="fieldJ">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="text"
                      name="email"
                      className="input"
                    />
                  </div>
                </div>
                <div className="fieldJ">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      onChange={event => this.handleChange(event)}
                      type="password"
                      name="password"
                      className="input"
                    />
                  </div>
                  {error && <small className="red">{error}</small>}
                </div>
                <button className="buttonJ">Login</button>
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
                  Don't have an account? <Link to="/register"> Sign up </Link>
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

export default Login
