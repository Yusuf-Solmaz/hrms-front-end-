import React from 'react'
import AdvertisementList from '../pages/AdvertisementList'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";

export default function Dashboard(){
    return(
        <div>
          <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <AdvertisementList/>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
        </div>
    )

}
