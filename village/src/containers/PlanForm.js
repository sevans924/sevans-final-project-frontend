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
  const [counselor_id, setCounselorId] = React.useState('');
  const [plan, setPlan] = React.useState(true);
  const [goal, setGoal] = React.useState('');
  const [signal, setSignal] = React.useState('');
  const [strategy, setStrategy] = React.useState('');
  const [emotion, setEmotion] = React.useState('');
  const [studentEvent, setStudentEvent] = React.useState('');


  const steps = ['User Info', 'Background', 'Signals', 'Strategies',  'Review Plan'];

const handleStudentId = (id) => {
  setStudentId(id);
}

const handleCounselorId = (id) => {
  setCounselorId(id);
}

const handleGoal = (string) => {
  setGoal(string);
}

const handleSignal = (string) => {
  setSignal(string);
}

const handleEmotion = (string) => {
  setEmotion(string);
}

const handleStudentEvent = (string) => {
  setStudentEvent(string);
}

const handleStrategy = (string) => {
  setStrategy(string);
}

const getStepContent = (step) => {

  switch (step) {
    case 0:
      return <SelectStudentCounselor handleInput={handleStudentId} handleCInput={handleCounselorId} students={props.studentData} counselors={props.counselorData}/>
    case 1:
      return <Background handleGoal={handleGoal} handleStudentEvent={handleStudentEvent}/>;
    case 2:
      return <Signals handleSignal={handleSignal} handleEmotion={handleEmotion}/>;
    case 3:
      return <Strategies handleStrategy={handleStrategy}/>;
    case 4: 
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
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
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Create New Plan
          </Typography>
        </Toolbar>
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
                <Button onClick={handleHome} className={classes.button}>
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
                    onClick={handleNext}
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