import React from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'


export default function Sidebar() {
  return (
    <div>
      <Menu inverted color='blue' size="large" vertical >

        <Menu.Item name='Advertisement List'>

          Advertisement List
          <Icon size='large' name='list ul' />



        </Menu.Item>

        <Menu.Item name='Employers' >

          Employers
          <Icon size='large' name='user doctor' />



        </Menu.Item>
        <Menu.Item name='Job Seekers' >

          Job Seekers
          <Icon size='large' name='user' />



        </Menu.Item>
      </Menu>
    </div>
  )

}
