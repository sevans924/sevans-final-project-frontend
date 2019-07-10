import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    multiline1: 'Type Here',
    multiline2: 'Type Here',
    multiline3: 'Type here'
  });

  const handleChange = name => event => {
    event.preventDefault();
      setValues({ ...values, [name]: event.target.value });
    };

 const handleSubmit = event => {
   event.preventDefault();
   const string = Object.values(values)
   props.handleStrategy(string);
 }



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Let's list some strategies that you can use to help you meet your goal.</Paper>
        </Grid>
      
     
        <Grid item xs={4}>
        <TextField
                id="outlined-multiline-flexible"
                label="Multiline1"
                multiline1
                rowsMax="4"
                value={values.multiline1}
                onChange={handleChange('multiline1')}
                className={classes.textField}
                fullWidth
                margin="normal"
                variant="outlined"
      />
        </Grid>
        <Grid item xs={4}>
        <TextField
                id="outlined-multiline-flexible"
                label="Multiline2"
                multiline2
                rowsMax="4"
                value={values.multiline2}
                onChange={handleChange('multiline2')}
                className={classes.textField}
                fullWidth
                margin="normal"
                variant="outlined"
      />
        </Grid>
        <Grid item xs={4}>
        <TextField
                id="outlined-multiline-flexible"
                label="Multiline3"
                multiline3
                rowsMax="4"
                value={values.multiline3}
                onChange={handleChange('multiline3')}
                className={classes.textField}
                fullWidth
                margin="normal"
                variant="outlined"
      />
        </Grid>
        <Grid item xs={3}>
        <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
        Submit Strategies
      </Button>
         
        </Grid>
      </Grid>
    </div>
  );
}






