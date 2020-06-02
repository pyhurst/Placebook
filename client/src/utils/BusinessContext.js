import React, { createContext, useReducer, useContext } from 'react';

const BizContext = createContext();
const { Provider } = BizContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_BIZ":
            return {
                ...state,
                name: action.name,
                category: action.category,
                times: {
                  open: action.open,
                  close: action.close
                },
                address: action.address,
                city: action.city,
                phone: action.phone,
                ownerId: action.ownerId,
                reservations: [action.reservations]

            };
        default:
            return state;
    }
};

const BizProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      name: "",
      category: "",
      times: {
        open: "",
        close: ""
      },
      url: "",
      address: "",
      city: "",
      phone: "",
      ownerId: "",
      reservations: []
    });

    return <Provider value={[state, dispatch]} {...props}/>
}

const useStoreContext = () => {
    return useContext(BizContext);
};

export { BizProvider, useStoreContext };


// import React, { createContext, useState } from "react";


// export const BizContext = createContext();

// export const BizProvider = ({ children }) => {
//   const [business, setBusiness] = useState({
//     name: "",
//       category: "",
//       times: {
//         open: "",
//         close: ""
//       },
//       url: "",
//       address: "",
//       city: "",
//       phone: "",
//       ownerId: "",
//       reservations: []
//   })
//   return (
//     <BizContext.Provider value={{ business, setBusiness }}>
//       {children}
//     </BizContext.Provider>
//   )
// }