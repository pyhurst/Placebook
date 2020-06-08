import React, { useRef } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Jumbotron, InputGroup } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
const Signup = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [state, dispatch] = useUserContext();
  const [userState, userDispatch] = useUserContext();
  const checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.email !== null && userState.username === "") {
        userDispatch({
          type: "ADD_USER",
          username: storageStatus.username,
          email: storageStatus.email,
          reservations: storageStatus.reservations,
          _id: storageStatus._id,
        });
      }
    }
  };
  checkLocal();
  const handleSubmit = (e) => {
    API.addUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    })
      .then((result) => {
        console.log("this", result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar status={userState.username} />
      {userState.username ? (
        <div></div>
      ) : (
        <div id="Signup">
          <Jumbotron>
            <h1>Signup for Placebook</h1>
        <form className="signup-form">
        <FormGroup>
          <label htmlFor="username">Username: </label>
          <br></br>
          <input
            type="text"
            name="username"
            id="usernameInput"
            ref={usernameRef}
          />
          <br></br>
          <label htmlFor="email">Email: </label>
          <br></br>
          <input type="text" name="email" id="emailInput" ref={emailRef} />
          <br></br>
          <label htmlFor="password">Password: </label>
          <br></br>
          <input
            type="password"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <br></br>
          <br></br>
          <Link className="btn btn-secondary" to="/login" onClick={handleSubmit}>
            Sign Up
          </Link>
          </FormGroup>
        </form>
        </Jumbotron>
      </div>
      )}
     </div>
  );
};
export default Signup;