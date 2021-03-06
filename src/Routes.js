import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import Canvas from './components/canvas/Canvas'
import Details from './components/details/Details'
import Home from './components/home/Home'
import NotFound from './components/not-found/Not-found'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Signup from './components/signup/Signup'

export default ({ props }) => (
  <Switch>
    <AppliedRoute exact path="/" component={Home} props={props} />
    <AppliedRoute exact path="/login" component={Login} props={props} />
    <AppliedRoute exact path="/logout" component={Logout} props={props} />
    <AppliedRoute exact path="/signup" component={Signup} props={props} />
    <AppliedRoute exact path="/:team/canvas" component={Canvas} props={props} />
    <AppliedRoute exact path="/:team/horizontal" component={Canvas} props={props} />
    <AppliedRoute exact path="/:team/details/:blockType" component={Details} props={props} />
    <AppliedRoute
      exact
      path="/:team/details/:blockType/:blockUuid"
      component={Details}
      props={props}
    />
    <Route component={NotFound} />
  </Switch>
)
