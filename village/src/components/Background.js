import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
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
      multiline1: 'Type Here'
    });

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
      props.handleGoal(values.multiline1)
    };

  return (
    <React.Fragment>
     
      <Grid container spacing={3}>
       
        <Typography variant="h6" gutterBottom>
        Describe the situation that you would like to manage.
      </Typography>
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
        <Typography variant="h6" gutterBottom>
        Now, let's set a goal to help you manage this situation.
      </Typography>
        <Grid item xs={12}>
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
        </Grid>
    
    </React.Fragment>
  );
}