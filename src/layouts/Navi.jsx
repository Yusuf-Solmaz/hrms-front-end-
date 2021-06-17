import React, { useState } from 'react'
import { Button, Dropdown, Menu, Icon, Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useHistory } from "react-router";
import AddAdv from './AddAdv'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(true)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(false)
    }
    return (
        <div>

            <Menu inverted fixed="top" color='blue' size='small'>
                <Menu.Item fixed="left">

                    <Icon size='big' name='users' />
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

                        <Menu.Item>
                            <AddAdv />
                        </Menu.Item>
                        <Menu.Item>

                            {/* {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" />
                                : <SignedOut signIn={handleSignIn} />} */}

                            {isAuthenticated ? <SignedOut signIn={handleSignIn} bisey="1" />
                                : <SignedIn signOut={handleSignOut}/>}


                        </Menu.Item>


                    </Menu.Menu>

                </Container>
            </Menu>

        </div>
    )

}
