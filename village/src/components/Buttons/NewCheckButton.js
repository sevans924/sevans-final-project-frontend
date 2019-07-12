import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIn1 from '../image/CheckIn1.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 400,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  media: {
    height: 300,
    alignItems: "center",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={(e) => props.handleClick('CheckIn')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={CheckIn1}
          title="CheckIn"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Check In!
          </Typography>
          
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}