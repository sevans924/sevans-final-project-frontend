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
    });

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
      props.handleReflect(event.target.value)
    };

  return (
    <React.Fragment>
     
      <Grid container spacing={3}>
       
        <Typography variant="h6" gutterBottom>
        You chose: {props.strategy.toUpperCase()}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Take some time to try your stratgey. Once your finished, come back and reflect on how it went below. Remember, it's okay if it didn't work this time. You can still go ahead a write down what happened.
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
        </Grid>
    
    </React.Fragment>
  );
}