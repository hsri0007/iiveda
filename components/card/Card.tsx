import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({title,value}) {
  return (
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Urgent requires experience developer
        </Typography>
        <Rating name="read-only" value={value} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">Apply for job</Button>
      </CardActions>
    </Card>
  );
}
