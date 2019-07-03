import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';


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
      return(
        <GridList className={classes.gridList} cols={2.5}>
        {props.myChecks.map(check => (
          <GridListTile id='checkInShow' key={check.student_id}>
            <img src={'https://churchleaders-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/2018/04/4.17.CC.CHILDREN.VBSCheckin.jpg'} alt={check.student_id} />
            <GridListTileBar
              title={check.updated_at}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${check.student_id}`} onClick={(e) => props.handleClick(e, 'checkInShow', check.id)}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
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