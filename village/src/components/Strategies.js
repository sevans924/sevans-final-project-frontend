import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

export default function CenteredGrid() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    multiline1: 'Type Here',
    multiline2: 'Type Here',
    multiline3: 'Type here'
  });

  const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Let's list some strategies that you can use to help you meet your goal.</Paper>
        </Grid>
      
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
        <TextField
                id="outlined-multiline-flexible"
                label="Strategy 1"
                multiline1
                rowsMax="4"
                value={values.multiline}
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
                label="Strategy 2"
                multiline2
                rowsMax="4"
                value={values.multiline}
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
                label="Strategy 3"
                multiline3
                rowsMax="4"
                value={values.multiline}
                onChange={handleChange('multiline3')}
                className={classes.textField}
                fullWidth
                margin="normal"
                variant="outlined"
      />
        </Grid>
      </Grid>
    </div>
  );
}






