import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import Canvas from './components/canvas/Canvas'
import Horizontal from './components/canvas/Horizontal'
import Home from './components/home/Home'
import Editor from './components/editor/Editor'
import NotFound from './components/not-found/Not-found'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Create from './components/create/Create'

export default ({ props }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <AppliedRoute exact path="/login" component={Login} props={props} />
    <AppliedRoute exact path="/signup" component={Signup} props={props} />
    <AppliedRoute exact path="/canvas" component={Canvas} props={props} />
    <AppliedRoute exact path="/item/create" component={Create} props={props} />
    <AppliedRoute exact path="/horizontal" component={Horizontal} props={props} />
    <AppliedRoute exact path="/editor/:blockType" component={Editor} props={props} />
    <Route component={NotFound} />
  </Switch>
)
