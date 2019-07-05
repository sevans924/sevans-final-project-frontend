
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
import Profile from './components/Profile'


class App extends Component {

  constructor(){
    super()
    this.state = {
      counselors: "",
      students: "",
      checkins: "",
      myStudents: "",
      myChecks: "",
      activeView: "SignIn",
      auth: {
        currentUser: "",
        signedIn: false
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

  componentDidMount(){
    const token = localStorage.getItem("token")

    if (token) {
      api.auth.getCurrentUser()
      .then(res => this.setState({
        auth: {
          currentUser: res
        }
      }))
    }

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

  postNewUser = (values) => {
    api.newUser.newUser(values)
    .then(data => console.log(data))
  }

  handleLogin = () => {
    this.setState({
      activeView: 'SignIn'
    });
  }

  handleHome = () => {
    this.setState({
      activeView: 'Home'
    });
  }

  handleSignUp = () => {
    this.setState({
      activeView: 'SignUp'
    });
  }

  handleProfile = () => {
    this.setState({
      activeView: 'Profile'
    });
  }

  handleLoginSubmit = (username, password) => {
    api.auth.login(username, password)
    .then(res => {
      localStorage.setItem("token",res.jwt)
      this.setState({
        activeView: 'Home',
        auth: {
          currentUser: res.parent,
          signedIn: true
        }
      })
    })
  
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      auth: {
        currentUser: '',
        signedIn: false
      }
    })
    this.setState({
      actionView: 'SignIn'
    })
  }

    

  getStepContent = (activeView) => {

    switch (activeView) {
      case 'Home':
        return <CounselorHome 
        counselorData={this.state.counselors} 
        studentData={this.state.students} 
        checkData={this.state.checkins} 
        myStudents={this.state.myStudents}
        myChecks={this.state.myChecks}
        />
      case 'SignIn':
        return <SignIn handleSignUp={this.handleSignUp} handleLoginSubmit={this.handleLoginSubmit}/>;
      case 'SignUp':
        return <SignUp handleLogin={this.handleLogin} counselors={this.state.counselors} handleNewUser={this.postNewUser}/>;
      case 'Profile':
        return <Profile />;
      default:
        throw new Error('Unknown step');
    }
  }


 

    render(){


      return (
        <div className="App">
          <NavBar
          currentUser={this.state.auth.currentUser}
          signedIn={this.state.auth.signedIn}
          handleLogin={this.handleLogin}
          handleProfile={this.handleProfile} 
          handleHome={this.handleHome}
            logout = {this.logout}
          />
          <br/> 
          <br/>
          <div id="content" className="ui container">
          {this.getStepContent(this.state.activeView)}
          </div>
        </div>
      );
    
      
    }

  
}

export default App;
