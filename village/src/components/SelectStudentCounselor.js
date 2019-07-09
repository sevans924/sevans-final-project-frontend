import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
const [studentData, setStudentData] = React.useState(props.myStudents)
const [counselorData, setCounselorData] = React.useState(props.counselors)


const getStudentProps = (props) => {
        if (props.myStudents){
          return props.myStudents
        }
        
      }
  const classes = useStyles();
  const [values, setValues] = React.useState({
    student: '',
    counselor: '',
    studentName: '',
    counselorName: ''
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    props.handleInput(values.student, values.studentName)
    props.handleCInput(values.counselor, values.counselorName)
  }

  const handleStudentClick = (e, string) => {
    e.preventDefault()
    setValues(oldValues => ({
      ...oldValues,
      studentName: string
    }));
  }

  const handleCounselorClick = (e, string) => {
    e.preventDefault()
    setValues(oldValues => ({
      ...oldValues,
      counselorName: string
    }));
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Please select student and counselor from the menus below.</Paper>
        </Grid>
        <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                Student 
                </InputLabel>
                <Select
                value={values.student}
                onChange={handleChange}
                input={<OutlinedInput labelWidth={labelWidth} name="student" id="outlined-age-simple" />}
                >
               {studentData.map((student) => 
              
                <MenuItem value={student} onclick={event => handleStudentClick(event, student.first_name)}>{student.first_name} {student.last_name}</MenuItem>
               
                )}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                Counselor
                </InputLabel>
                <Select
                value={values.counselor}
                onChange={handleChange}
                input={<OutlinedInput labelWidth={labelWidth} name="counselor" id="outlined-age-simple" />}
                >
               {counselorData.map((counselor) => 
              
              <MenuItem value={counselor} onclick={event => handleCounselorClick(event, counselor.last_name)}>{counselor.first_name} {counselor.last_name}</MenuItem>
             
              )}
                </Select>
            </FormControl>
        </Grid>
        
      </Grid>
    </div>
  );
}