import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckIn1 from './image/CheckIn1.jpg'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

 
  const checkTime = moment(props.check.created_at).format("ddd MMM DD YYYY")
  
  return (


    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            Ch
          </Avatar>
        }
        title='Check In'
        subheader={checkTime}
      />
      <CardMedia
        className={classes.media}
        image={CheckIn1}
        title="CheckIn"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          Goal: {props.check.goal}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Description
            </Typography>
          <Typography variant="body2" gutterBottom>
            {props.check.event}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Emotions
          </Typography>
          {props.check.emotion.split(',').map((emo, index) => {
            return(
             <Typography variant="body2" gutterBottom>
            {index + 1}.) {emo}
           </Typography>
            )
          })}
         <br/>
         
          <Typography variant="h6" gutterBottom>
            Physical Signals 
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.check.signal}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Physical Reflection 
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.check.signal_reflection}
          </Typography>
          <Typography variant="h6" gutterBottom>
            I tried.... 
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.check.strategy}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Reflection
          </Typography>
          <Typography variant="body2" gutterBottom>
          {props.check.reflection}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}