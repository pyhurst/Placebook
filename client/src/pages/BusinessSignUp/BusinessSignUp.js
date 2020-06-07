import React from "react";
import Signup from "../../components/Signup/Signup";
import BusinessInputs from "../../components/BusinessInput/BusinessInput";
import Navbar from "../../components/Navbar/Navbar";
const BusinessSignUp = () => {

  const onSwitch = (e) => {
    console.log(e.target.value);

    
  }

  return (
    <div>
      <div id="BusinessSignUp">
        <Signup />
        <BusinessInputs onSwitch={onSwitch}/>
      </div>
    </div>
  );
};

export default BusinessSignUp;
