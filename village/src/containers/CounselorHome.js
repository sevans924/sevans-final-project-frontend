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


 
// class CounselorHome extends Component {


    
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
      const [activeView, setActiveView] = React.useState('cHome');

      const getStepContent = (activeView) => {

        switch (activeView) {
          case 'cHome':
            return <CHome handleClick={handleClick}/>;
          case 'viewStudents':
            return <ViewStudents handleClick={handleClick}/>;
          case 'newPlan':
            return <PlanForm studentData={props.studentData} counselorData={props.counselorData} handleClick={handleClick}/>;
          case 'checkInShow':
            return <CheckInShow handleClick={handleClick}/>;
          default:
            throw new Error('Unknown step');
        }
      }

      const handleClick = (event, string) => {
        event.preventDefault()
        setActiveView(string)
      }
    
      return (
        <div className={classes.root}>
          {getStepContent(activeView)}
    </div>
  );
}
  

//   render() {
//       return(
//         <div className="CounselorHome">
//          <br/>
//          <br/>

//          <CounselorScroll checkData={this.props.checkData}/>
        
      
//       </div>
//       )
//   }
// }
// export default CounselorHome