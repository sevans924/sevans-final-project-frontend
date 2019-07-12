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
import Background from '../components/Background';
import Strategies from '../components/Strategies';
import Review from '../components/Review';
import Signals from '../components/Signals';
import SelectStudentCounselor from '../components/SelectStudentCounselor';
import { getThemeProps } from '@material-ui/styles';

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
  const [student_id, setStudentId] = React.useState('');
  const [studentName, setStudentName] = React.useState('');
  const [counselorName, setCounselorName] = React.useState('');
  const [counselor_id, setCounselorId] = React.useState('');
  const [plan, setPlan] = React.useState(true);
  const [goal, setGoal] = React.useState('');
  const [signal, setSignal] = React.useState('');
  const [strategy, setStrategy] = React.useState('');
  const [emotion, setEmotion] = React.useState([]);
  const [studentEvent, setStudentEvent] = React.useState('');
  const [createdAt, setCreatedAt] = React.useState('');


const steps = ['User Info', 'Background', 'Signals', 'Strategies',  'Review Plan'];

const handleStudentId = (string, id) => {
  setStudentId(id);
  setStudentName(string)
}

const handleCounselorId = (string, id) => {
  setCounselorId(id);
  setCounselorName(string)
}

const handleGoal = (string) => {
  setGoal(string);
}

const handleSignal = (string) => {
  setSignal(string);
}

const handleEmotion = (string) => {
  setEmotion([...emotion, string]);
}

const handleStudentEvent = (string) => {
  setStudentEvent(string);
}

const handleStrategy = (string) => {
  setStrategy(string);
  console.log(strategy)
}

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
      evvent: studentEvent,
      signal: signal, 
      strategy: strategy.join(),
      emotion: emotion.join(),
      studentEvent: studentEvent
    })
  })
  .then(resp => resp.json())
  .then(newPlan => {
    setCreatedAt(Date.parse(newPlan.created_at))
  })
 handleNext();
}

const getStepContent = (step) => {

  switch (step) {
    case 0:
      return <SelectStudentCounselor 
      handleInput={handleStudentId} 
      handleCInput={handleCounselorId} 
      myStudents={props.myStudents} 
      counselors={props.counselorData}
      userData={props.userData}/>
    case 1:
      return <Background 
      handleGoal={handleGoal} 
      handleStudentEvent={handleStudentEvent}/>;
    case 2:
      return <Signals 
      handleSignal={handleSignal} 
      handleEmotion={handleEmotion}/>;
    case 3:
      return <Strategies handleStrategy={handleStrategy}/>;
    case 4: 
      return <Review 
      goal={goal} 
      strategy={strategy} 
      studentEvent={studentEvent} 
      signal={signal} 
      emotion={emotion} 
      createdAt={createdAt}
      handlePlanSubmit={handlePlanSubmit}
      studentName={studentName}
      counselorName={counselorName}
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

  const handleHome = () => {
      console.log('Home!')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
       
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            My Plan
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
                  Please check your student account to review your plan and to create new check-ins.
                </Typography>
                <Button onClick={() => props.handleClick('Home')} renderAs={Button}>Home</Button>
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
                    {activeStep === steps.length - 1 ? 'Submit Plan' : 'Next'}
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