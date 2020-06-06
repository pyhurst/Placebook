import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";

const Business = () => {
  const [userState, userDispatch] = useUserContext();

  const checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.email !== null && userState.username === "") {
        userDispatch({
          type: "ADD_USER",
          username: storageStatus.username,
          email: storageStatus.email,
          reservations: storageStatus.reservations,
          _id: storageStatus._id,
        });
      }
    }
  };
  checkLocal();

  return (
    <div>
      <Navbar status={userState.username} />
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">Welcome, {userState.username} </div>
            <div className="column">Appointments: </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

// if (userResult.data.user) {
//   console.log(userResult.data.user.username);
//   setuserAuth("user");
// } else {
//   console.log("tist");
//   console.log(userResult.data.user.username);
// }

// {
//   userState.username ? (
//     <Navbar status={userState.username} />
//   ) : (
//     <Navbar status={userState.username} />
//   );
// }

// useEffect(() => {
//   API.checkUser()
//     .then((userResult) => {
//       setuserAuth(userResult.data.user.username);
//     })

//     .catch((err) => console.log(err));
// }, []);

// const navBar = () => {
//   if (userAuth !== "") {
//     console.log("1", userAuth);
//     return <Navbar status="user" />;
//   } else {
//     console.log("5", userAuth);
//     return <Navbar />;
//   }
// };

// const random = () => {
//   console.log("hello");
//   console.log(localStorage.getItem("currentUser"));
//   console.log(JSON.parse(localStorage.getItem("currentUser")));
//   console.log("=================");
// };
// random();

// const loggedOut = () => {
//   console.log("theres no context");
//   console.log(Boolean(userState.username));

//   API.userLogout(userState).then((e) => {
//     userDispatch({
//       username: "",
//       email: "",
//       reservations: [],
//       _id: "",
//     });
//   });
//   return <Navbar status={userState.username} />;
// };
