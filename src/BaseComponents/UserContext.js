import React, {useContext} from 'react';

export const userInfoContext = () => useContext(UserContext);

const UserContext = React.createContext({});

export const UserContextProvider = UserContext.Provider;

export default UserContext;
