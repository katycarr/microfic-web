import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import WriteScreen from './screens/Write'
import LoginScreen from './user/LoginScreen'

const Screen = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/write' component={WriteScreen} />
      <Route path='/login' component={LoginScreen} />
    </Switch>
  )
}

export default Screen
