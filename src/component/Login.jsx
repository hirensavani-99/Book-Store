import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Navbar from "./Navbar";
import Navbaruser from "./Navbaruser";
import Navbaradmin from "./Navbaradmin";

import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAdminSubmitted, setIsAdminSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      adminusername: "admin",
      adminpassword: "admin"
    },
    {
      username: "user",
      password: "user"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value || user.adminusername === uname.value );

    // Compare user info
    if (userData) {
      if (userData.password === pass.value) {
       
        setIsSubmitted(true);
        <div><Navbaruser/></div>
      } else if(userData.adminpassword === pass.value) {
        setIsAdminSubmitted(true);
      }
      else{
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    

  // JSX code for login form
  const renderForm = (
    <div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div><Navbaruser/></div> : renderForm && isAdminSubmitted ? <div><Navbaradmin/></div> : renderForm }
           
    
      </div>
    </div>
  );
}

export default Login;