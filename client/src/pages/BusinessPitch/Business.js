import React from "react";
import Jumbotron from "../../components/Jumbotron/JumbotronBusinessPage/JumbotronBusinessPage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Business = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Jumbotron />
        <Footer />
      </div>
    </div>
  );
};

export default Business;
