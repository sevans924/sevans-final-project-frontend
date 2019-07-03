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

export default function AddressForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      multiline: 'Controlled'
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
  return (
    <React.Fragment>
 
        <Typography variant="h6" gutterBottom>
        How does your body feel in this situation?
      </Typography>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Great" />}
            label="Great"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Good" />}
            label="Good"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Meh" />}
            label="Meh"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Poor" />}
            label="Poor"
          />
             <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="Rough" />}
            label="Rough"
          />
    
        </Grid>
        <Typography variant="h6" gutterBottom>
        Choose all of the emotions that you feel in this situation.
      </Typography>

        <TransferList />
    
    </React.Fragment>
  );
}