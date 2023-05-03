import React from 'react'
import {Container,Grid} from "@mui/material"
import SideNav from '../sidenav/sidenav'
import PostArea from '../postarea/PostArea'

const Dashboard = () => {
  return (
    <Container maxWidth="xl"sx={{mt:2}} >
      <Grid container spacing={2} >
        <Grid xs={2.5} item>
            <SideNav/>
        </Grid>
        <Grid xs={7} item >
          <PostArea />
        </Grid>
        <Grid xs={2.5} item >
        <SideNav/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard