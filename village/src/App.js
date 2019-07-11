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
import CounselorApp from './CounselorApp'
import StudentApp from './StudentApp'
import ParentApp from './ParentApp'
import UserNavBar from './containers/UserNavBar'
import ErrorModal from './components/ErrorModal'




class App extends Component {

    constructor() {
        super()
    let appState
    localStorage.appState !== undefined ? appState = JSON.parse(localStorage.getItem('appState')) : appState = localStorage
        this.state = {
            student: appState.student || false,
            parent: appState.parent || false,
            counselor: appState.counselor || false,
            counselors: appState.counselors || "",
            students: appState.students || "",
            checkins: appState.checkins || "",
            myStudents: appState.myStudents || "",
            myChecks: appState.myChecks || "",
            myCounselor: appState.myCounselor || "",
            myStudent: appState.myStudent || "",
            activeView: appState.activeView || "SignIn",
            auth: appState.auth || {
                currentUser: "",
                signedIn: false
            },
            newUser: appState.newUser || {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                myCounselor: ''
            }
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        // localStorage.setItem('savedView', 'SignIn')
        if (token) {
            api.auth.getCurrentUser()
                .then(res => this.setState({
                    auth: {
                        currentUser: res,
                    },
                    activeView: localStorage.getItem('savedView')
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

    }


    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
          const json = JSON.stringify(this.state);
          localStorage.setItem("appState", json);
        }
      }

    postStudentUser = (values) => {
        api.newStudentUser.newStudentUser(values)
            .then(data => console.log(data))
    }

    postParentUser = (values) => {
        api.newParentUser.newParentUser(values)
            .then(data => {
                console.log(data)
                api.newStudentparent.postStudentParent(values.myStudent, data.id)
                .then(joinData => console.log(joinData))
            })
    }

    postCounselorUser = (values) => {
        api.newCounselorUser.newCounselorUser(values)
            .then(data => console.log(data))
    }

  

    handleLogin = () => {
        this.setState({
            activeView: 'SignIn'
        });
    }



    handleSignUp = () => {
        this.setState({
            activeView: 'SignUp'
        });
    }



    renderView = () => {
        if (this.state.student === true) {
            this.setState({
                activeView: 'Student'
            })
        } else if (this.state.parent === true) {
            this.setState({
                activeView: 'Parent'
            })
        } else if (this.state.counselor === true) {
            this.setState({
                activeView: 'Counselor'
            })
        } else {
            this.setState({
                activeView: 'SignIn'
            })
        }
    }

    handleLoginSubmit = (username, password) => {
        api.auth.login(username, password)
            .then(res => {
                if (res.student) {
                    localStorage.setItem("token", res.jwt)
                    this.setState({
                        student: true,
                        auth: {
                            currentUser: res.student,
                            signedIn: true
                        }
                    })
                
                    this.renderView()
                } else if (res.parent) {
                    localStorage.setItem("token", res.jwt)
                    this.setState({
                        parent: true,
                        auth: {
                            currentUser: res.parent,
                            signedIn: true
                        }

                    })
                    this.renderView()
                } else if (res.counselor) {
                    localStorage.setItem("token", res.jwt)
                    this.setState({
                        counselor: true,
                        auth: {
                            currentUser: res.counselor,
                            signedIn: true
                        }
                    })
                    this.renderView()
                } else {
                    alert('Something went wrong, please check your username and password!')
                    this.setState({
                        activeView: 'SignIn'
                    })
                    this.renderView()
                }

            })
    }

    logout = () => {
       
        localStorage.removeItem("token")
        this.setState({
            student: false,
            parent: false,
            counselor: false,
            auth: {
                currentUser: '',
                signedIn: false
            }
        })
        this.setState({
            activeView: 'SignIn'
        })
    }



    getStepContent = (activeView) => {

        switch (activeView) {
            case 'Counselor':
                localStorage.setItem('savedView', 'Counselor')
                return (
                    <React.Fragment>

                        <div id="content" className="ui container">
                            <CounselorApp
                                handleLogout={this.logout}
                                handleLogin={this.handleLogin}
                                userData={this.state.auth.currentUser}
                                signedIn={this.state.auth.signedIn}
                                counselorData={this.state.counselors}
                                studentData={this.state.students}
                                checkData={this.state.checkins}
                            // myStudents={this.state.myStudents}
                            // myChecks={this.state.myChecks}
                            />
                        </div>
                    </React.Fragment>
                )
            case 'Student':
                localStorage.setItem('savedView', 'Student')
                return (
                    <React.Fragment>

                        <div id="content" className="ui container">
                            <StudentApp
                                handleLogout={this.logout}
                                handleLogin={this.handleLogin}
                                userData={this.state.auth.currentUser}
                                signedIn={this.state.auth.signedIn}
                                counselorData={this.state.counselors}
                                studentData={this.state.students}
                                // checkData={this.state.myChecks}
                                // myCounselor={this.state.myCounselor}

                            />
                        </div>
                    </React.Fragment>
                )
            case 'Parent':
                localStorage.setItem('savedView', 'Parent')
                return (
                    <React.Fragment>

                        <div id="content" className="ui container">
                            <ParentApp
                                handleLogout={this.logout}
                                handleLogin={this.handleLogin}
                                userData={this.state.auth.currentUser}
                                signedIn={this.state.auth.signedIn}
                            />
                        </div>
                    </React.Fragment>
                )
            case 'SignIn':
                return (
                    <React.Fragment>
                        <NavBar
                            signedIn={this.state.auth.signedIn}
                            handleLogin={this.handleLogin}
                            handleProfile={this.handleProfile}
                            logout={this.logout}
                        />
                        <br />
                        <br />
                        <div id="content" className="ui container">
                            <SignIn
                                handleSignUp={this.handleSignUp}
                                handleLoginSubmit={this.handleLoginSubmit}
                            />;
            </div>
                    </React.Fragment>
                )
            case 'SignUp':
                localStorage.setItem('savedView', 'SignUp')
                return (
                    <React.Fragment>
                        <NavBar

                            signedIn={this.state.auth.signedIn}
                            handleLogin={this.handleLogin}
                            handleProfile={this.handleProfile}
                            logout={this.logout}
                        />
                        <br />
                        <br />
                        <div id="content" className="ui container">
                            <SignUp
                                handleSignUp={this.handleSignUp}
                                handleLoginSubmit={this.handleLoginSubmit}
                                handleLogin={this.handleLogin}
                                handleStudentUser={this.postStudentUser}
                                handleParentUser={this.postParentUser}
                                handleCounselorUser={this.postCounselorUser}
                                counselors={this.state.counselors}
                                students={this.state.students}
                                postNewStudentParent={this.postNewStudentParent}
                            />;
            </div>
                    </React.Fragment>
                )
                case 'Error':
                    return(
                        <ErrorModal handleLogin={this.handleLogin}/>
                    )
            default:
                throw new Error('Unknown step');
        }
    }




    render() {
        return (
            <div className="App">
                {this.getStepContent(this.state.activeView)}
            </div>
        );
    }


}

export default App;