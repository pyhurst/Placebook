import React from "react";

const Login = () => {
  return (
    <div id="login">
      <h1>this is our Login page</h1>
      <label for="username">Username: </label>
      <input type="text" name="username" id="usernameInput" />
      <label for="email">Email: </label>
      <input type="text" name="email" id="emailInput" />
      <label for="password">Password: </label>
      <input type="text" name="password" id="passwordInput" />
    </div>
  );
};

export default Login;