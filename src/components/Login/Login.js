import React, { useEffect, useState } from "react";
import "./Login.css";

/* 
Styles can also be applied to your components using an object. 
Notice the naming of the properties and how the values are different 
than regular CSS. See that submitBtnStyle is used on the form submit button.
*/
const submitBtnStyle = {
  margin: "4%",
  width: "25%",
  height: "25px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",
};

function Login ({ handleLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameValid, setUserNameValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false)

  
  const handleInputChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
      setUserNameValid(userName.length > 6)
    } else {
      setPassword(e.target.value);
      setPasswordValid(password.length > 6)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      userName,
      password,
    };
    handleLogin(loginInfo);
    setUserName("");
    setPassword("");
  }


  return (
    <div className="login-container">
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            {formValid ? null : <p>Username and password must be longer than 6 char</p>}
            Enter your user name {userNameValid ? [" ✅ "] : [" ❌ "]}:
            <input
              type="text"
              value={userName}
              onChange={(e) => handleInputChange(e)}
              name="userName"
            ></input>
          </label>
          <label>
            Enter your password:{passwordValid ? [" ✅ "] : [" ❌ "]}:
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              name="password"
            ></input>
          </label>
          <input type="submit" style={submitBtnStyle}></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
