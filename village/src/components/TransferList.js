import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import EmotionCard from './EmotionCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));



export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const emotions = [
    [   'Content' ,
         'Creative' ,
         'Encouraged',
         'Enthusiastic',
         'Excited',
         'Fiery',
         'Glad',
         'Grateful',
         'Happy',
         'Joyful',
         'Proud',
         'Relieved',
         'Satisfied',
         'Strong',
    ],
    [   'Calm',
          'Balanced',
          'Compassionate',
          'Connected',
          'Empathetic',
          'Kind',
          'Relaxed',
          'Trusting',
          'Non-judgemental',
          'Open-minded',
          'Loving'
    ],
    [
         'Afraid',
         'Anxious',
         'Bored',
         'Disconnected',
         'Distracted',
         'Lazy',
         'Restless',
         'Scattered',
         'Uneasy',
         'Panicked',
         'Nervous',
         'Stressed',
         'Confused',
         'Worried'
    ],
    [
          'Achy',
          'Alienated',
          'Bullied',
          'Defeated',
          'Depressed',
          'Disappointed',
          'Discouraged',
          'Embarassed',
          'Exhausted',
          'Guilty',
          'Sad',
          'Vulnerable',
          'Rejected',
          'Overwhelmed',
          'Powerless',
          'Lonely',
          'Insecure',
          'In Pain'
    ],
    [
         'Angry',
         'Annoyed',
         'Arrogant',
         'Defensive',
         'Disgusted',
         'Jealous',
         'Grumpy',
         'Frustrated',
         'Impatient',
         'Irritated',
         'Resentful',
         'Self Critical'
    ]
  ]





  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {emotions.map((emotion, index) => 
            <Grid key={index} item>
              <EmotionCard handleEmotion={props.handleEmotion} emotions={emotion}/>
            </Grid>
            
          )}
        </Grid>
      </Grid>
      </Grid>
      )

}





