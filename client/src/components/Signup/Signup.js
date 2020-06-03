import React, { useRef } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "./Signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [state, dispatch] = useUserContext();

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("clicked");
    console.log(usernameRef.current.value);
    API.addUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    })
      .then((result) => {
        console.log("test");
        console.log(result);
        dispatch({
          type: "ADD_USER",
          username: result.data.username,
          email: result.data.email,
          reservations: result.data.reservations,
          _id: result.data._id,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div id="Signup" className="container">
        <h1>Signup for Placebook</h1>
        <form className="signup-form">
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            id="usernameInput"
            ref={usernameRef}
          />
          <label for="email">Email: </label>
          <input type="text" name="email" id="emailInput" ref={emailRef} />
          <label for="password">Password: </label>
          <input
            type="text"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <Link to="/user/home" onClick={handleSubmit}>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
