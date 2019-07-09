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

  constructor() {
    super()
    this.state = {
      myCounselor: "",
      myChecks: "",
      oneCheck: "",
      activeView: "Home",
      myPlans: "",
      myGoals: "",
      myStrategies: "",
      auth: {
        currentUser: "",
        signedIn: false
      },
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    // if (token) {
    //   api.auth.getCurrentUser()
    //     .then(res => this.setState({
    //       auth: {
    //         currentUser: res
    //       }
    //     })
    //     )
    // }
    
      api.myCounselor.getMyCounselor(this.props.userData.id)
          .then(counselorData => {
              this.setState({
                  myCounselor: counselorData
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


  handleHome = () => {
    this.setState({
      activeView: 'Home'
    });
  }



  handleProfile = () => {
    this.setState({
      activeView: 'Profile'
    });
  }

  handleClick = (event, string) => {
    event.preventDefault()
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
          studentData={this.state.students}
          checkData={this.state.checkins}
          myCounselor={this.state.myCounselor}
          myChecks={this.state.myChecks}
          handleClick={this.handleClick}
          handleCheckClick={this.handleCheckClick}
        />
      case 'CheckIn':
        return <CheckInForm 
        handleClick={this.handleClick} 
        student={this.state.auth.currentUser} 
        goals={this.getGoals} 
        myPlans={this.state.myPlans}
        handleHome={this.handleHome}/>
      case 'MyPlans':
        return <MyPlans myPlans={this.state.myPlans}/>
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
