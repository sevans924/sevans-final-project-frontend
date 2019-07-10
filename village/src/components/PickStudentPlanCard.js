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
import MyPlan from './image/MyPlan.jpg'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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

export default function PickStudentPlanCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  
  


  return (
    
    <Card className={classes.card}  >
        
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        title='My Plan'
        subheader={props.plan.createdAt}
      />
      <CardMedia
        onClick={() => props.handleMyPlan(props.plan)}
        className={classes.media}
        image={MyPlan}
        title="MyPlan"
      />
      
      <CardContent onClick={() => props.handleMyPlan(props.plan)}>
        <Typography variant="body2" color="textSecondary" component="p">
          Goal: {props.plan.goal}
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
        <CardContent onClick={() => props.handleMyPlan(props.plan)}>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {props.plan.studentEvent}
          </Typography>
          <Typography paragraph>
            My Emotions: {props.plan.emotion}
          </Typography>
          <Typography paragraph>
            My Physical Signals: {props.plan.signal}
          </Typography>
          <Typography>
            My Strategies: {props.plan.strategy}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}

