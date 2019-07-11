import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from '../services/api'



class NewProfile extends Component {
  
  constructor(props) {
    super(props)
   let profileState
  localStorage.profileState !== undefined ? profileState = JSON.parse(localStorage.getItem('profileState')) : profileState = localStorage
  this.state = {
    activeView: profileState.activeView || 'Profile',
    values: {
    firstName: profileState.values.firstName || props.userData.first_name,
    lastName: profileState.values.lastName || props.userData.last_name,
    email: profileState.values.email || props.userData.email,
    phone: profileState.value.phone || props.userData.phone
    }

  }
  
  
  const [activeView, setActiveView] = React.useState()
  const [values, setValues] = React.useState({
    
  })

MadeWithLove() {
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
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const classes = useStyles();



 

  componentDidUpdate = (prevProps, prevState) => {
    if (JSON.stringify(prevState) !== JSON.stringify(values, activeView)) {
      const json = JSON.stringify(values, activeView);
      localStorage.setItem("profileState", json);
    }
  }

  handleEditClick = (e) =>{
    e.preventDefault()
    setActiveView('EditProfile')
  }

  handleChange = name => event => {
    event.preventDefault();
    setValues({ ...values, [name]: event.target.value });
  };

  identity = () => {
    if (props.userData.is_student === true) {
      return 'I am a Student'
    } else if (props.userData.is_parent === true){
      return 'I am a Parent'
    } else if (props.userData.is_counselor === true){
      return 'I am a Counselor'
    }
  }

  handleSubmitClick = (e) =>{
    e.preventDefault()
    if (props.userData.is_student === true) {
      api.editStudent.editStudent(values, props.userData.id)
      .then(studentData => {
        setValues({
          firstName: studentData.first_name,
          lastName: studentData.last_name,
          email: studentData.email,
          phone: studentData.phone
        })
      })
      setActiveView('Profile')
      
    } else if (props.userData.is_parent === true){
      api.editParent.editParent(values, props.userData.id)
      .then(parentData => {
        setValues({
          firstName: parentData.first_name,
          lastName: parentData.last_name,
          email: parentData.email,
          phone: parentData.phone
        })
      })
      setActiveView('Profile')
    } else if (props.userData.is_counselor === true){
      api.editCounselor.editCounselor(values, props.userData.id)
      .then(counselorData => {
        setValues({
          firstName: counselorData.first_name,
          lastName: counselorData.last_name,
          email: counselorData.email,
          phone: counselorData.phone
        })
      })
      setActiveView('Profile')
    }
  }

  renderView = (activeView) => {
    switch (activeView) {
      case 'Profile':
      return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <i className="material-icons">face</i>
          </Avatar>
          <Typography component="h1" variant="h5">
            My Profile
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12}>
               {identity}
              </Grid>
              <Grid item xs={12} sm={6}>
                First Name: {values.firstName}
                
              </Grid>
              <Grid item xs={12} sm={6}>
              Last Name: {values.lastName}
              </Grid>
              <Grid item xs={12}>
               E-mail: {values.email}
              </Grid>
              <Grid item xs={12}>
                Phone Number: {values.phone ? values.phone : 'Please add a number'}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleEditClick}
            >
              Edit Profile
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </Container>
      )
      case 'EditProfile':
      return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <i className="material-icons">face</i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={values.firstName}
                  autoFocus
                  onChange={handleChange('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={values.lastName}
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange('lastName')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={values.email}
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
                  id="phone"
                  label={values.phone}
                  name="phone"
                  autoComplete="phone"
                  onChange={handleChange('phone')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmitClick}
            >
              Submit Changes
            </Button>
            
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove />
        </Box>
      </Container>
      )
    }
  }

  render(){
  return (
   <div className="ProfilePage">  
      {this.renderView(activeView)}
   </div>
  );
  }
}
}

export default NewProfile;