import React, { useState } from "react";
import axios from 'axios';


const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ user, setUser ] = useState({});


  const inputChange = e => {
    setUser ({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  console.log(user)
  const loginHandler = e => {
    e.preventDefault();
    axios
    .post(`http://localhost:5000/api/login`, user)
    .then(res => {
      localStorage.setItem('token',res.data.payload)
      props.history.push('/bubble-page')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="loginForm">

      <form onSubmit={loginHandler}>
        <h3>Log In Below</h3>
        <label 
          htmlFor="username"
        >Username:
        </label>
        <input 
          className="loginInput"
          type="text" 
          name="username" 
          id="username" 
          value={user.username}
          onChange={inputChange}
        />
        <label 
          htmlFor="password"
        >Password:
        </label>
        <input
          className="loginInput"
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={inputChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
