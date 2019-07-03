import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TransferList from './TransferList'

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
      signal: '',
    });

    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value });
    //     props.handleSignal(values.signal);
    //   };

      const handleInputChange = (event) => {
        const target = event.target.value;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        setValues({ ...values, signal: target });
        props.handleSignal(values.signal);
      }
      


  return (
    <React.Fragment>
 
        <Typography variant="h6" gutterBottom>
        How does your body feel in this situation?
      </Typography>
        <Grid item xs={12} >
          <FormControlLabel
            control={<Checkbox color="secondary" name="Great" value="Great" onChange={handleInputChange}/>}
            label="Great"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="Good" value="Good" onChange={handleInputChange}/>}
            label="Good"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="Meh" value="Meh" onChange={handleInputChange}/>}
            label="Meh"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="Poor" value="Poor" onChange={handleInputChange}/>}
            label="Poor"
          />
             <FormControlLabel
            control={<Checkbox color="secondary" name="Rough" value="Rough" onChange={handleInputChange}/>}
            label="Rough"
          />
    
        </Grid>
        <Typography variant="h6" gutterBottom>
        Choose all of the emotions that you feel in this situation.
      </Typography>

        <TransferList handleEmotion={props.handleEmotion}/>
    
    </React.Fragment>
  );
}