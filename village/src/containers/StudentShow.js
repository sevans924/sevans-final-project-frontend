import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StudentScroll from '../components/StudentScroll'
import Typography from '@material-ui/core/Typography';
import StudentPlanCard from '../components/StudentPlanCard'
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();

 



    return (

        <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
                Plans
        </Typography>
            <GridList className={classes.gridList} cols={2.5}>
                { props.studentPlans.map(plan => (
                    <StudentPlanCard plan={plan} />
                ))}
            </GridList>
            <p />

            <Typography gutterBottom variant="h5" component="h2">
                Check-Ins
          </Typography>
            <p />
            <Grid item xs={12}>
            <StudentScroll myChecks={props.studentChecks} handleCheckClick={props.handleCheckClick} />
                
            </Grid>
            <br/>

            <Button variant="contained" onClick={(e) => props.handleClick('viewStudents')} color="primary" className={classes.button}>
                Back To Students
            </Button>
        </Paper >
    )
}