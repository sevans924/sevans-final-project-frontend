import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import SpacingGrid from './SpacingGrid'
 
class StudentHome extends Component {

  constructor(){
    super()
    this.state = {
      counselor: "",
      student: "",
      checkins: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/students')
    .then(resp => resp.json())
    .then(studentData => {
      this.setState({
        student: studentData
      })
    })
  }
  


  render() {
      return(
        <div className="StudentHome">
         <br/>
         <br/>

         <SpacingGrid studentData={this.state.student}/>
        
      
      </div>
      )
  }
}
export default StudentHome