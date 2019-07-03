import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import SpacingGrid from './SpacingGrid'
 
class StudentHome extends Component {


  

  render() {
      return(
        <div className="StudentHome">
         <br/>
         <br/>

         <SpacingGrid checkData={this.props.checkData}/>
        
      
      </div>
      )
  }
}
export default StudentHome