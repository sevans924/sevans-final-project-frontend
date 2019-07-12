import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from '../tileData';
import CheckIn1 from '../image/CheckIn1.jpg'
import moment from 'moment'
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  bar:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 300,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      color: 'white',
  },
  media: {
    height: 400,
  },
}));



export default function SingleLineGridList(props) {
  const classes = useStyles();

  const toRender = () => {
    if (props.myChecks) {
     
      
      return(
        <Toolbar className={classes.bar}>
        <GridList className={classes.gridList} cols={2.5}>
        {props.myChecks.map((check, index) => (
          <GridListTile onClick={(e) => props.handleCheckClick(e, 'checkInShow', check.id)} id='checkInShow' key={index}>
            <img src={CheckIn1} alt={check.student_id} />
            <GridListTileBar
            onClick={(e) => props.handleCheckClick(e, 'checkInShow', check.id)}
              title= {moment(check.created_at).format("ddd MMM DD YYYY")}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            
            />
          </GridListTile>
        ))}
      </GridList>
      </Toolbar>
      )
    }
  }
  return (
    <div className={classes.root}>
      {toRender()}
    </div>
  );
            
}