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

  const getMyChecks = (student_id) => {
    return fetch(`${API_ROOT}/find_my_checks/${student_id}`).then(res =>
      res.json()
    );
  };

  const getStudentChecks = (counselor_id) => {
    return fetch(`${API_ROOT}/find_student_checks/${counselor_id}`).then(res => res.json());
  };

  const getMyStudents = (counselor_id) => {
    return fetch(`${API_ROOT}/find_my_students/${counselor_id}`).then(res =>
      res.json()
    );
  };

  const getMyCounselor = (student_id) => {
    return fetch(`${API_ROOT}/find_my_counselor/${student_id}`).then(res =>
      res.json()
    );
  };

  const newStudentUser = (values) => {
    return fetch(`${API_ROOT}/students`, {
      method: "POST", mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001"
      },
      body: JSON.stringify({
        student: {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        counselor_id: values.myCounselor,
        password: values.password,
        username: values.email,
        is_student: values.student,
        is_parent: values.parent,
        is_counselor: values.counselor
        }
    })
    }).then(res => res.json())
  }

  const newParentUser = (values) => {
    return fetch(`${API_ROOT}/parents`, {
      method: "POST", mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001"
      },
      body: JSON.stringify({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        student_id: values.myStudent,
        password: values.password,
        username: values.email,
        is_student: values.student,
        is_parent: values.parent,
        is_counselor: values.counselor
    })
    }).then(res => res.json())
  }

  const newCounselorUser = (values) => {
    return fetch(`${API_ROOT}/students`, {
      method: "POST", mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001"
      },
      body: JSON.stringify({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        counselor_id: values.myCounselor,
        password: values.password,
        username: values.email,
        is_student: values.student,
        is_parent: values.parent,
        is_counselor: values.counselor
    })
    }).then(res => res.json())
  }

  const postStudentParent = (student, parent) => {
    return fetch(`${API_ROOT}/student_parents`, {
      method: "POST", mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001"
      },
      body: JSON.stringify({
       student_id: student,
       parent_id: parent
    })
    }).then(res => res.json())
  }



const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`,{
    headers: headers
  }).then(res => res.json())
}

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST", mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
    body: JSON.stringify({
      username: username, 
      password: password})
  }).then(res => res.json())
}

const editStudent = (values, id) => {
  return fetch(`${API_ROOT}/students/${id}`, {
    method: "PATCH", mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
    body: JSON.stringify({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      username: values.email
  })
  }).then(res => res.json())
}

const editParent = (values, id) => {
  return fetch(`${API_ROOT}/parents/${id}`, {
    method: "PATCH", mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
    body: JSON.stringify({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      username: values.email
  })
  }).then(res => res.json())
}

const editCounselor = (values, id) => {
  return fetch(`${API_ROOT}/counselors/${id}`, {
    method: "PATCH", mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001"
    },
    body: JSON.stringify({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      username: values.email
  })
  }).then(res => res.json())
}

const getMyPlans = (student_id) => {
  return fetch(`${API_ROOT}/find_my_plans/${student_id}`).then(res =>
    res.json()
  );
}

const getStudent = (student_id) => {
  return fetch(`${API_ROOT}/students/${student_id}`).then(res => res.json());
}

const getJoin = (parent_id) => {
  return fetch(`${API_ROOT}/find_join/${parent_id}`).then(res => res.json());
}

export default {
  getJoin: {
    getJoin
  },
  getStudent: {
    getStudent
  },
  myPlans: {
    getMyPlans
  },
  editStudent: {
    editStudent
  },
  editParent: {
    editParent
  }, 
  editCounselor: {
    editCounselor
  },
  newStudentparent:{
    postStudentParent
  },
  newStudentUser:{
    newStudentUser
  },
  newParentUser:{
    newParentUser
  },
  newCounselorUser:{
    newCounselorUser
  },
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
  StudentChecks:{
    getStudentChecks
  },
  myStudents:{
    getMyStudents
  },
  myCounselor:{
    getMyCounselor
  },
  auth: {
    login,
    getCurrentUser
  }
}