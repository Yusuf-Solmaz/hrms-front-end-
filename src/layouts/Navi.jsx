import React from 'react'
import { Button, Dropdown, Menu, Icon, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Menu inverted fixed="top" color='blue' size='small'>
                <Menu.Item fixed="left">

                    <Icon size='big' name='users'/>
                     HRMS 
                       

                        </Menu.Item>

                <Container>

                    <Menu.Item>

                        <Button color='teal' animated='fade' >
                            <Button.Content visible>Home</Button.Content>
                            <Button.Content hidden>
                                <Icon name='home' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='teal' animated>
                            <Button.Content visible>Announcements</Button.Content>
                            <Button.Content hidden>
                                <Icon name='announcement' />
                            </Button.Content>
                        </Button>

                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button color='facebook' animated>
                                <Button.Content visible>Sign Up</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='signup' />
                                </Button.Content>
                            </Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button color='facebook' animated>
                                <Button.Content visible>Sign In</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='sign-in alternate' />
                                </Button.Content>
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )

}
