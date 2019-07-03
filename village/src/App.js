
import React, { Component } from 'react'
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import NavBar from './containers/NavBar'
import StudentHome from './containers/StudentHome'
import { Route, Switch } from 'react-router-dom';
import api from './services/api'
import SignIn from './SignIn'
import SignUp from './SignUp'
import CounselorHome from './containers/CounselorHome'
import PlanForm from './containers/PlanForm'


class App extends Component {

  constructor(){
    super()
    this.state = {
      counselors: "",
      students: "",
      checkins: "",
      myStudents: "",
      myChecks: ""
    }
  }

  componentDidMount(){
    api.students.getStudents()
    .then(studentData => {
      this.setState({
        students: studentData
      })
    })
    api.checkins.getCheckIn()
    .then(checkData => {
      this.setState({
        checkins: checkData
      })
    })
    api.counselors.getCounselors()
    .then(counselorData => {
      this.setState({
        counselors: counselorData
      })
    })
    api.myChecks.getMyChecks()
    .then(CheckData => {
      this.setState({
        myChecks: CheckData
      })
    })
    api.myStudents.getMyStudents()
    .then(studentData => {
      this.setState({
        myStudents: studentData
      })
    })
    
  }
 


 

    render(){
      return (
        <div className="App">
          <NavBar
            // currentUser={this.state.auth.currentUser}
            // logout = {this.logout}
          />
          <br/> 
          <br/>
          <div id="content" className="ui container">
            {/* <PlanForm students={this.state.students} counselors={this.state.counselors}/> */}
            <Route path="/home" render={routerProps => <CounselorHome 
            counselorData={this.state.counselors} 
            studentData={this.state.students} 
            checkData={this.state.checkins} 
            myStudents={this.state.myStudents}
            myChecks={this.state.myChecks}
            />} />
        
            {/* <Switch>
              <Route path="/" render={routerProps =>  <SignIn handleLogin={this.handleLogin} history={routerProps.history}  />} />
              <Route path="/signup" component={SignUp} />
              <Route path="/home" component={StudentHome} />
            
            </Switch> */}
          
          </div>
        </div>
      );
    }

  

// render() {
//   return (
//     <div className="App">
//       <NavBar />
//       <SignUp />
//       <SignIn />
//       <StudentHome checkData={this.state.checkins}/>
//     </div>
//   );
// }

// //////////////////////////////////////////////////////////////////////use code below for authentication



     // state = {
    //   auth: {
    //     currentUser: ""
    //   }
    // }
  
    // componentDidMount(){
    //   const token = localStorage.getItem("token")
  
    //   if (token) {
    //     api.auth.getCurrentUser()
    //     .then(res => this.setState({
    //       auth: {
    //         currentUser: res
    //       }
    //     }))
    //   }
    // }
  
    // logout = () => {
    //   localStorage.removeItem("token")
    //   this.setState({
    //     auth: {
    //       currentUser: {}
    //     }
    //   })
    // }
  
    // handleLogin = (username, password) => {
    //   api.auth.login(username, password)
    //   .then(res => {
    //     localStorage.setItem("token",res.jwt)
    //     this.setState({
    //       auth: {
    //         currentUser: res.user
    //       }
    //     })
    //   })
  
  
    // }

}

export default App;
