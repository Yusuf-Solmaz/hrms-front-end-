import React, { useState, useEffect} from 'react'
import { Table, Icon, Menu, Label, Button } from 'semantic-ui-react'
import AdvertisementService from '../services/advertisementService'

export default function AdvertisementList() {

    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(()=>{
        let advertisementService = new AdvertisementService()
        advertisementService.getAdvertisements().then(result=>setjobAdvertisements(result.data.data))
    })
    
    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Advertisement Description</Table.HeaderCell>
                        <Table.HeaderCell>Open Position</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map((jobAdvertisement) => (
                            <Table.Row>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.advertisementDeadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                            </Table.Row>

                        ))
                    }


                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>



            </Table>

        </div>
    )

}
