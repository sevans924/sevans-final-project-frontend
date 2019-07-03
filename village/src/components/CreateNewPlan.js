import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    <Card className={classes.card} onClick={(e) => props.handleClick(e, 'newPlan')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.coalition-s.org/wp-content/uploads/slide-1-1600x635.jpg"
          title="Plan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Create New Plan
          </Typography>
          
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}