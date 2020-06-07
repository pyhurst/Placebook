import React, { useRef } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [state, dispatch] = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.userLogin({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          dispatch({
            type: "ADD_USER",
            username: result.data.data.username,
            email: result.data.data.email,
            reservations: result.data.data.reservations,
            _id: result.data.data._id,
          });
          // console.log("hiiii", result);
          localStorage.setItem("currentUser", JSON.stringify(result.data.data));
        }
        if(result.data.type === "user") {
          window.location = "/user/home"
        } else {
          window.location = "/business/home"
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Jumbotron>
      <div id="Login">
        <h1>Login to Placebook</h1>
        <h5>New here? Sign up for an account to log in.</h5>
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="usernameInput"
            ref={usernameRef}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <button onClick={handleSubmit}>Log in</button>
        </form>
      </div>
      </Jumbotron>
    </div>
  );
};

export default Login;
