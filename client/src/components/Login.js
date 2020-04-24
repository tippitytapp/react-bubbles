import React, {useState} from "react";
import axios from "axios";

const Login = () => {

  const [user, setUser] = useState({})

  const inputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const loginHandler = event => {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/login`, user)
    .then(res => {
      console.log('Response from LoginHandler', res)
    })
    .catch(err => {
      console.log('Error from Loginhandler', err)
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
console.log(user);
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginHandler}>
        <h3>Log In Below</h3>
        <label 
          htmlFor="username"
        >Username:
        </label>
        <input 
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
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={inputChange}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
