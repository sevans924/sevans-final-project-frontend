import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BrainHeart1 from './image/BrainHeart1.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

////////////add view of all students

export default function OutlinedTextFields(props) {
    const classes = useStyles();


    const toRender = () => {
        if (props.myPlans) {
            const strategies = props.myPlans[0].strategy.split(",")
            return (
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        {strategies.map((strategy, index) => {
                            return(
                    <Grid item xs={3} id={index}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={BrainHeart1}
                                        title="BrainHeart1"
                                        onClick={props.handleStrategy(strategy)}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {strategy}
                                        </Typography>
                                      
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>
                            )
                        })}               

                    </Grid>
                </Paper>
            )
        }
    }


    return (
        <div className={classes.root}>
            {toRender()}
        </div>
    );


}


{/* <Grid item xs={3} id='Strategies2'>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={BrainHeart1}
                                        title="BrainHeart1"
                                        onClick={props.handleStrategy}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Strategy 2
             </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {props.myPlans[0].strategy}
             </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid>
                        <Grid item xs={3} id='Strategies3'>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={BrainHeart1}
                                        title="BrainHeart1"
                                        onClick={props.handleStrategy}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {props.myPlans[0].strategy}
              </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </Grid> */}