import React from "react";
import Signup from "../../components/Signup/Signup";
import BusinessInputs from "../../components/BusinessInput/BusinessInput";
import Navbar from "../../components/Navbar/Navbar";
const BusinessSignUp = () => {
  return (
    <div>
      <Navbar />
      <div id="BusinessSignUp">
        <Signup />
        <BusinessInputs />
      </div>
    </div>
  );
};

export default BusinessSignUp;
