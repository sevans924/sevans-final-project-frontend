import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import StudentEvent from '../components/StudentEvent';
import MyStrategies from '../components/MyStrategies';
import Reflect from '../components/Reflect';
import PhysicalSignal from '../components/PhysicalSignal';
import EmotionalSignal from '../components/EmotionalSignal';
import { getThemeProps } from '@material-ui/styles';
import SelectMyPlan from '../components/SelectMyPlan';
const API_ROOT = `http://localhost:3001/api/v1`;

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [student_id, setStudentId] = React.useState(props.student.id);
  const [counselor_id, setCounselorId] = React.useState(props.myCounselor.id);
  const [plan, setPlan] = React.useState(false);
  const [myPlan, setMyPlan] = React.useState('');
  const [goal, setGoal] = React.useState(props.getGoals);
  const [signal, setSignal] = React.useState('');
  const [strategies, setStrategies] = React.useState('');
  const [strategyTried, setStrategyTried] = React.useState();
  const [emotion, setEmotion] = React.useState([]);
  const [studentEvent, setStudentEvent] = React.useState('');
  const [signalReflection, setSignalReflection] = React.useState('');
  const [reflection, setReflection] = React.useState('');


const steps = ['Plan', 'Body Scan', 'Emotion Scan', 'Event', 'Strategies',  'Reflect'];




const handleSignal = (string) => {
  setSignal(string);
}

const handleSignalReflection = (string) => {
  setSignalReflection(string);
}

const handleEmotion = (string) => {
  setEmotion([...emotion, string]);
}

const handleStudentEvent = (string) => {
  setStudentEvent(string);
}

const handleStrategy = (string) => {
  setStrategyTried(string);
  
}

const handleMyPlan = (plan) => {
  console.log(plan)
  console.log(plan.signal)
  setMyPlan(plan)
  setGoal(plan.goal)
  setStrategies(plan.strategy)
  alert('Your plan is set!')
}

const handleReflect = (string) => {
  setReflection(string)
}

// const handleGoal = (string) => {
//   setGoal(string)
// }

const handlePlanSubmit = () => {
  fetch(`http://localhost:3001/api/v1/check_ins`, {
    method: "POST", mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
    body: JSON.stringify({
      student_id: student_id, 
      counselor_id: counselor_id,
      plan: plan,
      goal: goal, 
      signal: signal, 
      strategy: strategyTried,
      emotion: emotion.join(),
      event: studentEvent,
      reflection: reflection,
      signal_reflection: signalReflection
    })
  })
  
 props.handleNewCheck()

 handleNext();
}

const getStepContent = (step) => {

  switch (step) {
    case 0:
      return <SelectMyPlan
      handleMyPlan={handleMyPlan}
      myPlans={props.myPlans}
      />
    case 1:
      return <PhysicalSignal  
      handleSignal={handleSignal} 
      handleSignalReflection={handleSignalReflection} 
      students={props.studentData} 
      counselors={props.counselorData}/>
    case 2:
      return <EmotionalSignal handleEmotion={handleEmotion}  />;
    case 3:
      return <StudentEvent 
      handleStudentEvent={handleStudentEvent}
      myPlan={props.myPlan}
      goal={goal}
      />;
    case 4:
      return <MyStrategies 
      handleStrategy={handleStrategy} 
      theStrategies={strategies}/>;
    case 5: 
      return <Reflect
      goal={goal} 
      strategyTried={strategyTried} 
      studentEvent={studentEvent} 
      signal={signal} 
      emotion={emotion} 
      handleReflect={handleReflect}
      />;
    default:
      throw new Error('Unknown step');
  }
}

  const submitPlanClick = () => {
    activeStep === steps.length - 1 ? handlePlanSubmit() : handleNext()
  }
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

 

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            My Check In
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  That's it!
                </Typography>
                <Typography variant="subtitle1">
                  Please check your student account to review your check-ins.
                </Typography>
                <Button onClick={props.handleHome} className={classes.button}>
                      Home
                    </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={submitPlanClick}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Check-In' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <MadeWithLove />
      </main>
    </React.Fragment>
  );
}