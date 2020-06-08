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
    if (usernameRef.current.value === "" || passwordRef.current.value === "" || emailRef.current.value === "") {
      alert("All Fields must be filled")
    } else if (usernameRef.current.value && passwordRef.current.value && emailRef.current.value) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(emailRegex.test(emailRef.current.value)){
        if(passwordRef.current.value.length > 7){
          API.addUser({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
          })
            .then((result) => {
              console.log("this", result);
              window.location = ("/login")
            })
            .catch((err) => console.log(err));
          return true;
        } else {
          alert("Password must be greater than 7 characters")
          return false;
        }

      } else {
        alert("This is not a valid email, try again")
        return false;
      }
    } 
    // else {
    //   API.addUser({
    //     username: usernameRef.current.value,
    //     password: passwordRef.current.value,
    //     email: emailRef.current.value,
    //   })
    //     .then((result) => {
    //       console.log("this", result);
    //       window.location = ("/login")
    //     })
    //     .catch((err) => console.log(err));
    // }
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
              {/* <Form className="container signup-form">
        <FormGroup>
        <Label htmlFor="username">Username: </Label>
          <Input style={{"width": "200px"}}
            type="text"
            name="username"
            id="usernameInput"
            ref={usernameRef}
          />
          <Label htmlFor="email">Email: </Label>
          <Input style={{"width": "200px"}} type="text" name="email" id="emailInput" ref={emailRef} />
          <Label htmlFor="password">Password: </Label>
          <Input
          style={{"width": "200px"}}
            type="password"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <Link to="/login" onClick={handleSubmit}>
            Sign Up
          </Link>
        </FormGroup>
        </Form> */}
              <form className="signup-form">
                <FormGroup>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    ref={usernameRef}
                  />
                  <label htmlFor="email">Email: </label>
                  <input type="text" name="email" id="emailInput" ref={emailRef} />
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    ref={passwordRef}
                  />
                  <Link onClick={handleSubmit}>
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
