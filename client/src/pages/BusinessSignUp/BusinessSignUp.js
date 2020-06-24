import React from "react";
import Signup from "../../components/Signup/Signup";
import Footer from "../../components/Footer/Footer";
import BusinessInputs from "../../components/BusinessInput/BusinessInput";

const BusinessSignUp = () => {
  const onSwitch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div id="BusinessSignUp">
        <Signup />
        <BusinessInputs onSwitch={onSwitch} />
      </div>
      <Footer />
    </div>
  );
};

export default BusinessSignUp;
