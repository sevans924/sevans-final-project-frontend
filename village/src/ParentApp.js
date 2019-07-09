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
    this.state = {
      myStudent: "",
      myStudentId: "",
      oneCheck: "",
      studentChecks: "",
      studentPlans: "",
      activeView: "Home",
      auth: {
        currentUser: props.userData,
      },
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

  // handleStudentShow = (string, id) => {

  //   api.getStudent.getStudent(id)
  //     .then(data => {
  //       this.setState({
  //         oneStudent: data,
  //       })
  //     })
  //   api.myPlans.getMyPlans(id)
  //     .then(planData => {
  //       this.setState({
  //         studentPlan: planData
  //       })
  //     })
  //   api.myChecks.getMyChecks(id)
  //     .then(cData => {
  //       this.setState({
  //         studentCheck: cData
  //       })
  //     })
  //   if (this.state.studentPlan.length > 0) {
  //     this.setState({
  //       activeView: string
  //     })
  //   }

  // }


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
            return <MyPlans myPlans={this.state.studentPlans}/>
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