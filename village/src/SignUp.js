import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, Route } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [selected, setSelected] = React.useState('student')
  const [values, setValues] = React.useState({
    counselor: false,
    parent: false,
    student: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    myCounselor: '',
    myStudent: ''
  })

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleSelectChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.value]: true,
    }));
    setSelected(event.target.value)
  }

  const handleChange = name => event => {
    event.preventDefault();
    setValues({ ...values, [name]: event.target.value });
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault()
    props.handleStudentUser(values)
    props.handleLogin()
  }

  const handleParentSubmit = (e) => {
    e.preventDefault()
    props.handleParentUser(values)
    // props.postNewStudentParent()
    props.handleLogin()
  }

  const handleCounselorSubmit = (e) => {
    e.preventDefault()
    props.handleCounselorUser(values)
    props.handleLogin()
  }

  // const handleSelectChange = name => event => {
  //   event.preventDefault()

  //   setValues({ ...values, [name]: true });
  // }

  const renderCorrectForm = (selected) => {
    switch (selected) {
      case 'student':
        return (

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange('firstName')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange('lastName')}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Counselor
                </InputLabel>
                <Select
                  value={values.myCounselor}
                  onChange={handleChange('myCounselor')}
                  input={<OutlinedInput labelWidth={labelWidth} name="counselor" id="outlined-age-simple" />}
                >
                  {props.counselors.map((counselor) =>

                    <MenuItem value={counselor.id}>{counselor.first_name} {counselor.last_name}</MenuItem>

                  )}
                </Select>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleStudentSubmit}
            >
              Sign Up
            </Button>
          </Grid>


        );
      case 'parent':
        return (

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange('firstName')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange('lastName')}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Student
                </InputLabel>
                <Select
                  value={values.myStudent}
                  onChange={handleChange('myStudent')}
                  input={<OutlinedInput labelWidth={labelWidth} name="student" id="outlined-age-simple" />}
                >
                  {props.students.map((student) =>

                    <MenuItem value={student.id}>{student.first_name} {student.last_name}</MenuItem>

                  )}
                </Select>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleParentSubmit}
            >
              Sign Up
      </Button>
          </Grid>


        );
      case 'counselor':
        return (

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange('firstName')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange('lastName')}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleCounselorSubmit}
            >
              Sign Up
      </Button>

          </Grid>


        );
      default:
        throw new Error('Unknown step');
    }


  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <br />
        <br />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            I am a...
        </InputLabel>
          <Select
            value={selected}
            onChange={handleSelectChange}
            input={<OutlinedInput labelWidth={labelWidth} name="identity" id="outlined-age-simple" />}
          >
            <MenuItem value="">
              <em>-Select One-</em>
            </MenuItem>
            <MenuItem value={'student'}>Student</MenuItem>
            <MenuItem value={'parent'}>Parent</MenuItem>
            <MenuItem value={'counselor'}>Counselor</MenuItem>
          </Select>
        </FormControl>
        <form className={classes.form} noValidate>
          {renderCorrectForm(selected)}

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="https://localhost3000/" onClick={props.handleLogin} activeClassName="sign-in">
                Already have an account? Sign In!
            </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}