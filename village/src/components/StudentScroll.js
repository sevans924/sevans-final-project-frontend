import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckIn1 from './image/CheckIn1.jpg'
import moment from 'moment'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function SingleLineGridList(props) {
  const classes = useStyles();

  const toRender = () => {
    if (props.myChecks) {
      const revCheck = props.myChecks.reverse()
      return(
        <GridList className={classes.gridList} cols={2.5}>
        {revCheck.map((check, index) => (
          <GridListTile onClick={(e) => props.handleCheckClick(e, 'checkInShow', check.id)} id='checkInShow' key={index}>
            <img src={CheckIn1} alt={check.student_id} />
            <GridListTileBar
            onClick={(e) => props.handleCheckClick(e, 'checkInShow', check.id)}
              title={moment(check.created_at).format("ddd MMM DD YYYY")}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            
            />
          </GridListTile>
        ))}
      </GridList>
      )
    }
  }
  return (
    <div className={classes.root}>
      {toRender()}
    </div>
  );
            
}