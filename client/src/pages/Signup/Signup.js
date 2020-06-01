import React from "react";

const Signup = () => {
  return (
    <div id="Signup">
      <h1>this is our Signup page</h1>
      <label for="username">Username: </label>
      <input type="text" name="username" id="usernameInput" />
      <label for="email">Email: </label>
      <input type="text" name="email" id="emailInput" />
      <label for="password">Password: </label>
      <input type="text" name="password" id="passwordInput" />
    </div>
  );
};

export default Signup;