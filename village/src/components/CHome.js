import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CounselorScroll from '../components/CounselorScroll'
import CreateNewPlan from '../components/CreateNewPlan'
import ViewStudentsButton from '../components/ViewStudentsButton'
import Typography from '@material-ui/core/Typography';


    
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));

    export default function CenteredGrid(props) {
      const classes = useStyles();


  
  return (
            
            <Grid container spacing={3}>
            <Grid item xs={6} id='viewStudents'>
            <ViewStudentsButton myStudents={props.myStudents} handleClick={props.handleClick}/>
                
            </Grid>
            <Grid item xs={6} id='newPlan'>
            <CreateNewPlan handleClick={props.handleClick}/>
            </Grid>
            <p/>
             
            <Typography gutterBottom variant="h5" component="h2">
                Recent Check-Ins
          </Typography>   
                <p/>
            <Grid item xs={12}>
                <CounselorScroll myChecks={props.myChecks} handleClick={props.handleClick}/>
            </Grid>

            </Grid>

    );
}