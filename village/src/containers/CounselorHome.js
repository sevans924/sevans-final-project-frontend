// import React, { Component } from 'react'
// import Typography from '@material-ui/core/Typography';
// import SpacingGrid from './SpacingGrid'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CounselorScroll from '../components/CounselorScroll'
import CreateNewPlan from '../components/CreateNewPlan'
import ViewStudentsButton from '../components/ViewStudentsButton'
import ViewStudents from '../components/ViewStudents'
import PlanForm from './PlanForm'
import CheckInShow from '../components/CheckInShow'
import CHome from '../components/CHome'





    
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
      const API_ROOT = `http://localhost:3001/api/v1`;
      const [activeView, setActiveView] = React.useState('cHome');
      const [oneCheck, setOneCheck] = React.useState('');

      const getStepContent = (activeView) => {

        switch (activeView) {
          case 'cHome':
            return <CHome myChecks={props.myChecks} handleClick={handleClick}/>;
          case 'viewStudents':
            return <ViewStudents myStudents={props.myStudents} handleClick={handleClick}/>;
          case 'newPlan':
            return <PlanForm studentData={props.myStudents} counselorData={props.counselorData} handleClick={handleClick}/>;
          case 'checkInShow':
            return <CheckInShow check={oneCheck} handleClick={handleClick}/>;
          default:
            throw new Error('Unknown step');
        }
      }

      const handleClick = (event, string, id) => {
        event.preventDefault()
        setActiveView(string)
        fetch(`${API_ROOT}/check_ins/${id}`)
        .then(res => res.json())
        .then(check => {
          setOneCheck(check)
        })
      
      }
    
      return (
        <div className={classes.root}>
          {getStepContent(activeView)}
    </div>
  );
}
  
