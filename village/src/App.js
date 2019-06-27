import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import NavBar from './containers/NavBar'
import StudentHome from './containers/StudentHome'

function App() {
  return (
    <div className="App">
      <NavBar />
      <StudentHome />
    </div>
  );
}

export default App;
