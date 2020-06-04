import React, { createContext, useReducer, useContext } from "react";

const BizContext = createContext();
const { Provider } = BizContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BIZ":
      return {
        ...state,
        date: action.date,
        businessId: action.businessId,
        name: action.name,
        address: action.address,
        phone: action.phone,
        ownerId: action.ownerId,
        reservations: [action.reservations],
        times: {
          open: action.times.open,
          close: action.times.close,
          timeslot_length: action.times.timeslot_length,
          capacity: action.times.capacity,
        },
      };
    case "UPDATE_DATE":
      return {
        ...state,
        date: action.date
      }
    default:
      return state;
  }
};

//reservations: [
//   {
//      date: "06-05-20",
//      time: 7,
//      capacity: 46,
//      ids: [1, 2 ,19, 30]
//   },
//   {
//      date: "06-05-20",
//      time: 8,
//      capacity: 48,
//      ids: [18, 32]
//   },
// ]

const BizProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    date: new Date(),
    businessId: "",
    name: "",
    address: "",
    phone: "",
    ownerId: "",
    reservations: [],
    times: {
      open: 0,
      close: 0,
      timeslot_length: 0,
      capacity: 0,
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBizContext = () => {
  return useContext(BizContext);
};

export { BizProvider, useBizContext };
