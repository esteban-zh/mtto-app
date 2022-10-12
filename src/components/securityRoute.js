import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Root from './root';

const SecurityRoute = () => {
    const stateAuth  = useContext(AuthContext);
    const {authReady} = stateAuth;

  return authReady ? <Root/> : <div> loading....</div>;
}

export default SecurityRoute;