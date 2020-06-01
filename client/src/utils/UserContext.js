import React from 'react';

const UserContext = React.createContext(
    {
        username: "",
        password: "",
        email: "",
        reservations: []
    }
);

module.exports = UserContext;