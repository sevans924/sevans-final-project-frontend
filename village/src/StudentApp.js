import React, { Component } from 'react'
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import UserNavBar from './containers/UserNavBar'
import StudentHome from './containers/StudentHome'
import { Route, Switch } from 'react-router-dom';
import api from './services/api'
import CheckInForm from './containers/CheckInForm'
import MyPlans from './components/MyPlans'
import Profile from './components/Profile'
import CheckInShow from './components/CheckInShow'
const API_ROOT = `http://localhost:3001/api/v1`;



class StudentApp extends Component {

  constructor(props) {
    super(props)
    let studentAppState
    localStorage.studentAppState !== undefined ? studentAppState = JSON.parse(localStorage.getItem('studentAppState')) : studentAppState = localStorage
    this.state = {
      myCounselor: studentAppState.myCounselor || "",
      myChecks: studentAppState.myChecks || "",
      oneCheck: studentAppState.oneCheck|| "",
      activeView: studentAppState.activeView || "Home",
      myPlans: studentAppState.myPlans || "",
      myGoals: studentAppState.myGoals || "",
      myStrategies: studentAppState.myStrategies || "",
      studentUser: studentAppState.studentuser || "",
      auth: studentAppState.auth || {
        currentUser: props.userData,
        signedIn: props.signedIn
      }
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      api.auth.getCurrentUser()
        .then(res => this.setState({
          auth: {
            currentUser: res
          }
        })
        )
    }

    api.getStudent.getStudent(this.props.userData.id)
    .then(studentData => {
        this.setState({
            studentUser: studentData
        })
    })
    
      api.myCounselor.getMyCounselor(this.props.userData.id)
          .then(counselorData => {
              this.setState({
                  myCounselor: counselorData[0]
              })
          })
  
  
      api.myChecks.getMyChecks(this.props.userData.id)
          .then(CheckData => {
              this.setState({
                  myChecks: CheckData
              })
          })

      api.myPlans.getMyPlans(this.props.userData.id)
      .then(PlanData => {
        this.setState({
            myPlans: PlanData
        })
    })
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      const json = JSON.stringify(this.state);
      localStorage.setItem("studentAppState", json);
    }
  }

  handleNewCheck = () => {
    api.myChecks.getMyChecks(this.props.userData.id)
          .then(CheckData => {
              this.setState({
                  myChecks: CheckData
              })
          })
  }


  handleHome = () => {
    this.handleNewCheck()
    this.setState({
      activeView: 'Home'
    });
  }



  handleProfile = () => {
    this.setState({
      activeView: 'Profile'
    });
  }

  handleClick = (string) => {
    this.setState({
      activeView: string
    })
  }

  handleCheckClick = (event, string, id) =>{
    event.preventDefault()
  
  fetch(`${API_ROOT}/check_ins/${id}`)
  .then(res => res.json())
  .then(check => {
    this.setState({
      oneCheck: check
    })
  })
  this.setState({
    activeView: string
  })

}






  getStepContent = (activeView) => {

    switch (activeView) {
      case 'Home':
        return <StudentHome
          counselorData={this.state.counselors}
          studentData={this.state.studentUser}
          checkData={this.state.checkins}
          myCounselor={this.state.myCounselor}
          myChecks={this.state.myChecks}
          handleClick={this.handleClick}
          handleCheckClick={this.handleCheckClick}
        />
      case 'CheckIn':
        return <CheckInForm 
        handleClick={this.handleClick} 
        student={this.state.studentUser} 
        goals={this.getGoals} 
        myPlans={this.state.myPlans}
        handleHome={this.handleHome}
        myCounselor={this.state.myCounselor}
        handleNewCheck={this.handleNewCheck}/>
      case 'MyPlans':
        return <MyPlans 
        myPlans={this.state.myPlans}
        studentName={this.state.studentUser}
        counselorName={this.state.myCounselor.last_name}/>
      case 'Profile':
        return <Profile 
        userData={this.props.userData} 
        myCounselor={this.state.myCounselor}/>;
      case 'checkInShow':
          return <CheckInShow 
          check={this.state.oneCheck} 
          handleClick={this.handleCheckClick} />;
      default:
        throw new Error('Unknown step');
    }
  }



  render() {


    return (
      <div className="App">
        <UserNavBar
          currentUser={this.state.auth.currentUser}
          signedIn={this.state.auth.signedIn}
          handleLogin={this.props.handleLogin}
          handleProfile={this.handleProfile}
          handleHome={this.handleHome}
          handleLogout={this.props.handleLogout}
          myCounselor={this.state.myCounselor}
        />
        <br />
        <br />
        <div id="content" className="ui container">
          {this.getStepContent(this.state.activeView)}
        </div>
      </div>
    );


  }


}

export default StudentApp;
