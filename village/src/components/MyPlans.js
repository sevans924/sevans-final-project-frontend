import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import StudentPlanCard from './StudentPlanCard'



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
        
        <GridList className={classes.gridList} cols={2.5} >
        {props.myPlans.map(plan => (
        
        <StudentPlanCard 
        plan={plan} 
        studentName={props.studentName} 
        counselorName={props.counselorName}/>
       
        ))}
      </GridList>
      )
    }
  }


  return (
    <div className={classes.root}>
      {toRender()}
    </div>
  );


      }