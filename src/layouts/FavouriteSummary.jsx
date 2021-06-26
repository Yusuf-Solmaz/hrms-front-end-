import React from 'react'
import { NavLink } from 'react-router-dom';
import { Dropdown, Label,Menu } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function FavouriteSummary() {

    const { favouriteItems } = useSelector(state => state.favourite)

    return (
        <div>
            <Menu.Item  >
            <Dropdown item text="My favourites" >
                <Dropdown.Menu>
                    {
                        favouriteItems.map((favouriteItem) => (
                            <Dropdown.Item key={favouriteItem.jobAdvertisement.jobAdvertisementId}>
                                {favouriteItem.jobAdvertisement.jobDescription}
                               
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/">Go to Favourites</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
        </div>
    )
}