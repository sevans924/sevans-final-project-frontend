import React, { Component } from 'react'
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import UserNavBar from './containers/UserNavBar'
import { Route, Switch } from 'react-router-dom';
import api from './services/api'
import Profile from './components/Profile'
import StudentShow from './containers/StudentShow'
import CheckInShow from './components/CheckInShow'
import ParentHome from './containers/ParentHome'
import MyPlans from './components/MyPlans'


const API_ROOT = `http://localhost:3001/api/v1`;


class ParentApp extends Component {

  constructor(props) {
    super(props)
    let parentAppState
    localStorage.parentAppState !== undefined ? parentAppState = JSON.parse(localStorage.getItem('parentAppState')) : parentAppState = localStorage
    this.state = {
      myStudent: parentAppState.myStudent || "",
      myCounselor: parentAppState.myCounselor || "",
      myStudentId: parentAppState.myStudentId || "",
      oneCheck: parentAppState.oneCheck || "",
      studentChecks: parentAppState.studentChecks || "",
      studentPlans: parentAppState.studentPlans || "",
      activeView: parentAppState.activeView || "Home",
      auth: parentAppState.auth || {
        currentUser: props.userData,
        signedIn: props.signedIn
      }
    }
  }


  componentDidMount() {

    api.getJoin.getJoin(this.props.userData.id)
      .then(join => {
        this.setState({
          myStudentId: join[0].student_id
        })
        api.getStudent.getStudent(join[0].student_id)
          .then(studentData => {
            this.setState({
              myStudent: studentData
            })
          })
          api.myCounselor.getMyCounselor(join[0].student_id)
          .then(counselorData => {
              this.setState({
                  myCounselor: counselorData[0]
              })
          })
        api.myChecks.getMyChecks(join[0].student_id)
          .then(CheckData => {
            this.setState({
              studentChecks: CheckData
            })
          })
        api.myPlans.getMyPlans(join[0].student_id)
          .then(PlanData => {
            this.setState({
              studentPlans: PlanData
            })
          })
      })

  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      const json = JSON.stringify(this.state);
      localStorage.setItem("parentAppState", json);
    }
  }



  handleProfile = () => {
    this.setState({
      activeView: 'Profile'
    });
  }

  handleHome = () => {
    this.setState({
      activeView: 'Home'
    })
  }

  handleClick = (string) => {

    this.setState({
      activeView: string
    })
  }




  handleCheckClick = async (event, string, id) => {
    event.preventDefault()
    
   await fetch(`${API_ROOT}/check_ins/${id}`)
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
        return <ParentHome
          studentPlans={this.state.studentPlans}
          studentChecks={this.state.studentChecks}
          handleCheckClick={this.handleCheckClick}
          handleClick={this.handleClick}
        />
      case 'checkInShow':
        return <CheckInShow
          check={this.state.oneCheck}
          handleCheckClick={this.handleCheckClick}
          handleClick={this.handleClick}
        />;
      case 'MyPlans':
        return <MyPlans 
        myPlans={this.state.studentPlans} 
        studentName={this.state.myStudent}
        counselorName={this.state.myCounselor.last_name}
        />
      case 'Profile':
        return <Profile
          userData={this.props.userData}
          myCounselor={this.state.myCounselor}
        />;
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

export default ParentApp;