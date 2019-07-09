
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UserNavBar from './containers/UserNavBar'
import { Route, Switch } from 'react-router-dom';
import api from './services/api'
import CounselorHome from './containers/CounselorHome'
import PlanForm from './containers/PlanForm'
import Profile from './components/Profile'
import ViewStudents from './components/ViewStudents'
import CheckInShow from './components/CheckInShow'
import CHome from './components/CHome'
import StudentShow from './containers/StudentShow'


const API_ROOT = `http://localhost:3001/api/v1`;


class CounselorApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      myStudents: "",
      myChecks: "",
      oneCheck: "",
      activeView: 'Home',
      studentPlan: "",
      studentCheck: "",
      auth: {
        currentUser: props.userData,
        signedIn: true
      },
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        myCounselor: ''
      }
    }
  }

  componentDidMount() {
    api.StudentChecks.getStudentChecks(this.props.userData.id)
      .then(CheckData => {
        this.setState({
          myChecks: CheckData
        })
      })

    api.myStudents.getMyStudents(this.props.userData.id)
      .then(studentData => {
        this.setState({
          myStudents: studentData
        })
      })


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

  handleStudentShow = (string, id) => {
   
    api.getStudent.getStudent(id)
      .then(data => {
        this.setState({
          oneStudent: data,
        })
      })
    api.myPlans.getMyPlans(id)
    .then(planData => {
      this.setState({
        studentPlan: planData
      })
    })
    api.myChecks.getMyChecks(id)
      .then(cData => {
        this.setState({
          studentCheck: cData
        })
      })
   if (this.state.studentPlan.length > 0){
    this.setState({
      activeView: string
    })
   }
   
  }


  handleCheckClick = (event, string, id) => {
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
        return <CHome
          myChecks={this.state.myChecks}
          handleClick={this.handleClick}
          handleCheckClick={this.handleCheckClick} />;
      case 'viewStudents':
        return <ViewStudents
          myStudents={this.state.myStudents}
          handleClick={this.handleClick}
          handleStudentShow={this.handleStudentShow}
        />;
      case 'newPlan':
        return <PlanForm
          myStudents={this.state.myStudents}
          counselorData={this.props.counselorData}
          handleClick={this.handleClick} />;
      case 'checkInShow':
        return <CheckInShow
          check={this.state.oneCheck}
          handleClick={this.handleCheckClick} />;
      case 'studentShow':
        return <StudentShow
          student={this.oneStudent}
          studentPlans={this.state.studentPlan}
          studentChecks={this.state.studentCheck}
          handleCheckClick={this.handleCheckClick}
          handleClick={this.handleClick}
        />
      case 'Profile':
        return <Profile userData={this.props.userData} />;
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

export default CounselorApp;
