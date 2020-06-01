import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                username: action.username,
                // password: action.password,
                email: action.email,
                reservations: [action.reservations]
            };
        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        username: "",
        // password: "",
        email: "",
        reservations: []
    });

    return <Provider value={[state, dispatch]} {...props}/>
}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };