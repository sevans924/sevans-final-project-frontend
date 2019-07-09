import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
      multiline1: ''
    });

  
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.handleSignalReflection(values.multiline1)
      };

   

      const handleInputChange = (event) => {
        const target = event.target.value;
        setValues({ ...values, signal: target });
        props.handleSignal(values.signal);
      }
      


  return (
    <React.Fragment>
 
    <Typography variant="h6" gutterBottom>
        Take a deep breath. 
      </Typography>
      <Typography variant="h6" gutterBottom>
        Now, count to 10.
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
      
        <Grid container spacing={3}>
       
       <Typography variant="h6" gutterBottom>
       Describe how your body feels right now. (i.e. my heart is racing, my head hurts, etc.)
     </Typography>
       <Grid item xs={12}>
       <TextField
               id="outlined-multiline-flexible"
               label="Multiline1"
               multiline
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