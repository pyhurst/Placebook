import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                username: state.username,
                password: state.password,
                email: state.email
            };
        default:
            return state;
    }
};

const UserProvider = ({ value = [] }) => {
    const [state, dispatch] = useReducer(userReducer, {
        username: "",
        password: "",
        email: "",
        reservations: []
    });

    return <UserContext.Provider value={[state, dispatch]} />
}

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };