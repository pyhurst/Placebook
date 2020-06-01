import React, { useRef } from "react";
import { useStoreContext } from "../../utils/UserContext";
import API from "../../utils/API";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Clicked')

    
  }

  return (
    <div id="Signup">
      <h1>this is our Signup page</h1>
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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;