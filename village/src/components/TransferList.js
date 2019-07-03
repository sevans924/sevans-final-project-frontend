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



export default function SpacingGrid() {
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
              <EmotionCard emotions={emotion}/>
            </Grid>
            
          )}
        </Grid>
      </Grid>
      </Grid>
      )

}








// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import List from '@material-ui/core/List';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: 'auto',
//   },
//   cardHeader: {
//     padding: theme.spacing(1, 2),
//   },
//   list: {
//     width: 200,
//     height: 230,
//     backgroundColor: theme.palette.background.paper,
//     overflow: 'auto',
//   },
//   button: {
//     margin: theme.spacing(0.5, 0),
//   },
// }));

// function not(a, b) {
//   return a.filter(value => b.indexOf(value) === -1);
// }

// function intersection(a, b) {
//   return a.filter(value => b.indexOf(value) !== -1);
// }

// function union(a, b) {
//   return [...a, ...not(b, a)];
// }




// export default function TransferList() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([]);
//   const [left, setLeft] = React.useState([0, 1, 2, 3, 4, 5, 6, 7]);
//   const [right, setRight] = React.useState([]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = value => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const numberOfChecked = items => intersection(checked, items).length;

//   const handleToggleAll = items => () => {
//     if (numberOfChecked(items) === items.length) {
//       setChecked(not(checked, items));
//     } else {
//       setChecked(union(checked, items));
//     }
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const customList = (title, items) => (
//     <Card>
//       <CardHeader
//         className={classes.cardHeader}
//         avatar={
//           <Checkbox
//             onClick={handleToggleAll(items)}
//             checked={numberOfChecked(items) === items.length && items.length !== 0}
//             indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
//             disabled={items.length === 0}
//             inputProps={{ 'aria-label': 'all items selected' }}
//           />
//         }
//         title={title}
//         subheader={`${numberOfChecked(items)}/${items.length} selected`}
//       />
//       <Divider />
//       <List className={classes.list} dense component="div" role="list">
//         {emotions.map(emotion => {
//           const labelId = `transfer-list-all-item-${emotion.label}-label`;

//           return (
//             <ListItem key={emotion.label} role="listitem" button onClick={handleToggle(emotion.label)}>
//               <ListItemIcon>
//                 <Checkbox
//                   checked={checked.indexOf(emotion.label) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`${emotion.label}`} />
//             </ListItem>
//           );
//         })}
//         <ListItem />
//       </List>
//     </Card>
//   );

//   return (
//     <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
//       <Grid item>{customList('All Emotions', left)}</Grid>
//       <Grid item>
//         <Grid container direction="column" alignItems="center">
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleCheckedRight}
//             disabled={leftChecked.length === 0}
//             aria-label="move selected right"
//           >
//             &gt;
//           </Button>
//           <Button
//             variant="outlined"
//             size="small"
//             className={classes.button}
//             onClick={handleCheckedLeft}
//             disabled={rightChecked.length === 0}
//             aria-label="move selected left"
//           >
//             &lt;
//           </Button>
//         </Grid>
//       </Grid>
//       <Grid item>{customList('My Emotions', right)}</Grid>
//     </Grid>
//   );
// }