import React, { Component } from 'react'
import './login.css'
import Home from '../home/home'
import LoaderButton from '../loader-button/loader-button'
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { Auth } from 'aws-amplify'
import { Route53 } from 'aws-sdk/clients/all'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      email: '',
      password: '',
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    this.setState({ isLoading: true })

    try {
      await Auth.signIn(this.state.email, this.state.password)
      this.props.userHasAuthenticated(true)
      this.props.history.push('/canvas')
    } catch (e) {
      alert(e.message)
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <div>
        <Home />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
          </form>
        </div>
      </div>
    )
  }
}
