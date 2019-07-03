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
    <Card className={classes.card} id='viewStudents' onClick={(e) => props.handleClick(e, 'viewStudents')}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.yonjamedia.com/wp-content/uploads/2018/05/senior-coloring-pages-portraits-student-name-coloring-pages-fest-jack-o-lantern-star-printable-of-senior-coloring-pages.jpg"
          title="Student Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           View Students
          </Typography>
          
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
}