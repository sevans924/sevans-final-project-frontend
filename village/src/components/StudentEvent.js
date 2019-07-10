import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getThemeProps } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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

export default function AddressForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    multiline: 'Type Here',
    // goal: ''
  });

  const inputLabel = React.useRef(null);
  

  //  const handleGoalChange = (event) => {
  //    event.preventDefault()
  //     setValues(oldValues => ({
  //       ...oldValues,
  //       goal: event.target.value,
  //     }));
  //     props.handleGoal(event.target.value)
  //   }

  //   const handleGoalClick = (e, string) => {
  //     e.preventDefault()
  //     setValues(oldValues => ({
  //       ...oldValues,
  //       goal: string
  //     }));
  //   }

  const handleChange = name => event => {
    event.preventDefault()
    setValues({ ...values, [name]: event.target.value });
    props.handleStudentEvent(event.target.value)
  };




//   const toRender = () => {
//     if (props.myPlans.length > 1) {
//       const myGoals = props.myPlans.filter(plan => plan.goal)
    
//       return (
//         <React.Fragment>  
//         <Typography variant="h6" gutterBottom>
//           Which goal would you like to work on?
//       </Typography>
        
//         <Grid item xs={6}>
//           <FormControl variant="outlined" className={classes.formControl}>
//             <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
//               Goal
//                 </InputLabel>
//             <Select
//               value={values.goal}
//               onChange={(e) => handleGoalChange(e)}
//               input={<OutlinedInput labelWidth={labelWidth} name="goal" id="outlined-age-simple" />}
//             >
//               {myGoals.map((goal) => {
//                 return (
//                   <MenuItem
//                     value={goal}
//                     onclick={event => handleGoalClick(event, goal)}
//                   >
//                     {goal}
//                   </MenuItem>
//                 )
//               }
//               )}
//             </Select>
//           </FormControl>
//         </Grid> 
//         </React.Fragment>
// )
//     } else {
//       return (
       
//       )
//     }
//   }

  return (

    <React.Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12}>
      <Typography variant="h6" paragraph>
          Goal: {props.goal}
        </Typography>
        </Grid>
        <br/>
        <Grid item xs={12}>
        <Typography variant="h6" paragraph>
          Okay, now tell me more about what led you to check-in today.
      </Typography>
      </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={values.multiline}
            onChange={handleChange('multiline')}
            className={classes.textField}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>

    </React.Fragment>
  );
}