import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        username: action.username,
        email: action.email,
        reservations: action.reservations,
        pastReservations: action.pastReservations,
        _id: action._id,
      };
    default:
      return state;
  }
};

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    reservations: [],
    pastReservations: [],
    _id: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext, UserContext };
