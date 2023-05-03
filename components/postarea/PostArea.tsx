import React from 'react'
import ImgMediaCard from '../card/Card'
import {Grid,Typography,Box} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PostArea = () => {
  return (
    <div>
        <Box sx={{pb:1,pl:"2px",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant='h6' >Popular Jobs</Typography>
        <ChevronRightIcon />
        </Box>
        <Grid container spacing={2} >
            <Grid item xs={4} >  <ImgMediaCard title="Product UI Designer" value={5} /></Grid>
            <Grid item  xs={4} >  <ImgMediaCard title="UI & UX Designer" value={4} /></Grid>
            <Grid item  xs={4} >  <ImgMediaCard title="FrontEnd developer" value={4.5}/></Grid>
        </Grid>
    </div>
  )
}

export default PostArea