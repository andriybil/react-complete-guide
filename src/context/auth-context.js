import React from 'react';

const authContext = React.createContext({
  authentificate: false,
  login: () => {}
});

export default authContext;