import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StudentScroll from '../components/Scroll/StudentScroll'
import MyPlanButton from '../components/Buttons/MyPlanButton'
import Typography from '@material-ui/core/Typography';
import NewCheckButton from '../components/Buttons/NewCheckButton'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 900,
  },
  text: {
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();



  return (
    <Paper className={classes.paper}>
      <Grid 
      container
      spacing={3}
       >
        <Grid item xs={6} id='CheckIn'>
          <NewCheckButton myStudents={props.myStudents} handleClick={props.handleClick} />

        </Grid>
        <Grid item xs={6} id='MyPlans'>
          <MyPlanButton handleClick={props.handleClick} />
        </Grid>
        <p />

        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
          My Check-Ins
          </Typography>
        <p />
        <Grid item xs={12}>
          <StudentScroll myChecks={props.myChecks} handleCheckClick={props.handleCheckClick} />
        </Grid>

      </Grid>
    </Paper>

  );
}