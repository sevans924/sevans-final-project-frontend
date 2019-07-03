const API_ROOT = `http://localhost:3001/api/v1`;
const token = localStorage.getItem("token")
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": token
}
const getStudents = () => {
  return fetch(`${API_ROOT}/students`).then(res =>
    res.json()
  );
};

const getParents = () => {
    return fetch(`${API_ROOT}/parents`).then(res =>
      res.json()
    );
  };

const getCounselors = () => {
    return fetch(`${API_ROOT}/counselors`).then(res =>
      res.json()
    );
  };

const getCheckIn = () => {
    return fetch(`${API_ROOT}/check_ins`).then(res =>
      res.json()
    );
  };

  const getMyChecks = () => {
    return fetch(`${API_ROOT}/find_my_checks1`).then(res =>
      res.json()
    );
  };

  const getMyStudents = () => {
    return fetch(`${API_ROOT}/find_my_students1`).then(res =>
      res.json()
    );
  };




const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`,{
    headers: headers
  }).then(res => res.json())
}

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({username, password})
  }).then(res => res.json())
}

export default {
  students:{
    getStudents
  },
  parents:{
    getParents
  },
  counselors:{
    getCounselors
  },
  checkins:{
    getCheckIn
  },
  myChecks:{
    getMyChecks
  },
  myStudents:{
    getMyStudents
  },
  auth: {
    login,
    getCurrentUser
  }
}