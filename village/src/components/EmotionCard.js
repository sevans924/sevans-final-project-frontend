import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  card: {
    maxWidth: 155,
  },
  media: {
    height: 140,
  },
});



export default function MediaCard(props) {
   
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
         
          <Typography variant="body2" color="textSecondary" component="p">
            {props.emotions.map(emotion => 
                 <FormControlLabel
                 control={<Checkbox color="secondary" name="saveAddress" value={emotion} />}
                 label={emotion}
               />)}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}