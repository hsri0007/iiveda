import React from 'react'
import {Container,Grid} from "@mui/material"

const Dashboard = () => {
  return (
    <Container maxWidth="xl"sx={{pt:2}} >
      <Grid container >
        <Grid xs={3} >sidenav</Grid>
        <Grid xs={6} >postarea</Grid>
        <Grid xs={3} >sidenav</Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard