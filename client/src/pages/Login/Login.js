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
    API.userLogin({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then((result) => {
        if (result.status === 200) {
          console.log("the response:", result);
          dispatch({
            type: "ADD_USER",
            username: result.data.username,
            email: result.data.email,
            reservations: result.data.reservations,
            _id: result.data._id,
          });
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
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            id="usernameInput"
            ref={usernameRef}
          />
          <label for="password">Password: </label>
          <input
            type="text"
            name="password"
            id="passwordInput"
            ref={passwordRef}
          />
          <Link onClick={handleSubmit} to="/user/home">
            Log in
          </Link>
        </form>
      </div>
      </Jumbotron>
    </div>
  );
};

export default Login;
