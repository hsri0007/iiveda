import Divider from '@mui/material/Divider';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

const SideNav = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography sx={{ color: '#040404' }}>Filters</Typography>
        <Box sx={{ mt: 2 }} />
        <Divider />
        <Box sx={{ mt: 2 }} />
        <Typography sx={{ fontWeight: "600" }}>Availability</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{
              '&.Mui-checked': {
                color: '#040404'
              }
            }}  defaultChecked />}
            label={<span style={{color:'#818c9b'}} >Urgent</span>} 
          />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }} />} label={<span style={{color:'#818c9b'}} >Remote</span>} />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }} />} label={<span style={{color:'#818c9b'}} >Full-Time</span>} />
        </FormGroup>
        <Box sx={{ mt: 2 }} />
        <Divider />
        <Box sx={{ mt: 2 }} />
        <Typography sx={{ fontWeight: "600" }}>Experience</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{
              '&.Mui-checked': {
                color: '#040404'
              }
            }}  defaultChecked />}
            label={<span style={{color:'#818c9b'}} >Graphic Designer</span>} 
          />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }} />} label={<span style={{color:'#818c9b'}} >Web Designer</span>} />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }}  />} label={<span style={{color:'#818c9b'}} >Full Stack Developer</span>} />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }}  />} label={<span style={{color:'#818c9b'}} >Front End Developer</span>} />
          <FormControlLabel control={<Checkbox sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }} />} label={<span style={{color:'#818c9b'}} >Backend End Developer</span>} />
          <FormControlLabel control={<Checkbox  sx={{
    '&.Mui-checked': {
      color: '#040404'
    }
  }} />} label={<span style={{color:'#818c9b'}} >Reactjs Developer</span>} />
        </FormGroup>
        <Box sx={{ mt: 2 }} />
        <Divider />
        <Box sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
};

export default SideNav;
