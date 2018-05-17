import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './user/buttons/Logout'
import { Menu } from 'semantic-ui-react'

const Header = () => {
  return(
    <Menu >
      <Menu.Item as={NavLink} exact to='/'>Read</Menu.Item>
      <Menu.Item as={NavLink} to='/profile'>Profile</Menu.Item>
      <Menu.Item as={NavLink} to='/write'>Write</Menu.Item>
      <Menu.Item position='right'>
        <LogoutButton />
      </Menu.Item>
    </Menu>
  )
}

export default Header
