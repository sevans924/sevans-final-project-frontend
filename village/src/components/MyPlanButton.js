import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyPlan from './image/MyPlan.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={(e) => props.handleClick('MyPlans')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MyPlan}
          title="MyPlans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Plans
          </Typography>
          
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}