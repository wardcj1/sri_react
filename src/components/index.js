import React, { Component } from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './assets/images/sri_logo.png';
import { Route, BrowserRouter, Link, Redirect, Switch, NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import InvSpectrum from './InvSpectrum/InvSpectrum';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Suitability from './Suitability/Suitability';
import Dashboard from './protected/Dashboard'
import Recommendation from './protected/Recommendation/Recommendation'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading...</h1> : (
      <BrowserRouter>
        <div>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink activeClassName="activeNav" to="/">
              <img src={logo} className="App-logo" alt="Smart Robo Investments" height="50px" />
            </NavLink>

          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="activeNav" to="/InvSpectrum/InvSpectrum">Start</NavLink></li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Sign in</Link>
                      </span>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/InvSpectrum' component={InvSpectrum} />
                <PublicRoute authed={this.state.authed} path='/MyPortfolio' component={MyPortfolio} />
                <PublicRoute authed={this.state.authed} path='/Suitability' component={Suitability} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path='/Recommendation' component={Recommendation} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
