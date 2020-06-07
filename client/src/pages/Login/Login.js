import React, { useRef } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

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
        if (result.status === 200) {
          dispatch({
            type: "ADD_USER",
            username: result.data.username,
            email: result.data.email,
            reservations: result.data.reservations,
            _id: result.data._id,
          });
          // console.log("hiiii", result);
          localStorage.setItem("currentUser", JSON.stringify(result.data));
        }
      })
      .then(() => {
        window.location = "/user/home";
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div id="Login">
        <h1>this is our Login page</h1>
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
    </div>
  );
};

export default Login;
