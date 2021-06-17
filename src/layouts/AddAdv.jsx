import React from 'react'
import { Button,  Menu, Icon, } from 'semantic-ui-react'

export default function AddAdv() {
    return (
        <div>
            
            <Button color='orange' animated='fade' >
                <Button.Content visible>Add Advertisement</Button.Content>
                <Button.Content hidden>
                    <Icon name='add circle' />
                </Button.Content>
            </Button>
            
        </div>
    )
}
