import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import PickStudentPlanCard from './PickStudentPlanCard'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));



export default function OutlinedTextFields(props) {
  const classes = useStyles();


  const toRender = () => {
    if (props.myPlans) {
      return(
          <React.Fragment>
          <Grid item xs={12}> 
           <Typography paragraph>
            Choose a plan:
          </Typography>
          </Grid>
        <GridList className={classes.gridList} cols={2.5}>
        {props.myPlans.map(plan => (
        <PickStudentPlanCard handleMyPlan={props.handleMyPlan} plan={plan}/>
        ))}
      </GridList>
      </React.Fragment>
      )
    }
  }


  return (
    <div className={classes.root}>
      {toRender()}
    </div>
  );


      }