import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Students from './image/Students.jpg'


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

////////////add view of all students

export default function OutlinedTextFields(props) {
  const classes = useStyles();


  const toRender = () => {
    if (props.myStudents) {
    
      return(
        <GridList className={classes.gridList} cols={2.5}>
        {props.myStudents.map(student => (
          <GridListTile onClick={(e) => props.handleStudentShow('studentShow', student.id)} id='checkInShow' key={student.id}>
            <img src={Students} alt={student.id} />
            <GridListTileBar
              onClick={(e) => props.handleStudentShow('studentShow', student.id)}
              title={student.first_name}
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
         {/* <form>
        <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
        </form> */}
      {toRender()}
    </div>
  );


      }