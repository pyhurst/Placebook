import React, { useRef } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Jumbotron, InputGroup } from "reactstrap";
import { Form, FormGroup, Label, Input } from 'reactstrap';


const Signup = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [state, dispatch] = useUserContext();

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
      <Navbar />
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
            type="text"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <Link to="/login" onClick={handleSubmit}>
            Sign Up
          </Link>
        </form>
        </Jumbotron>
      </div>
     </div>
  );
};

export default Signup;
