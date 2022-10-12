import {useState, useEffect} from "react";
import { watchUserChanges } from "../services/firebase";

const initialAuth = {
    authReady: false,
    isLoggedIn: false,
    user: null,
};

const useAuthState = () => {
    const [stateAuth, setStateAuth] = useState(initialAuth);
    
    useEffect(() => {
      watchUserChanges((user) => {
        if (user) {
            setStateAuth({
                authReady: true,
                isLoggedIn: true,
                user,
            });
        } else {
            setStateAuth({
                authReady: true,
                isLoggedIn: false,
                user: null,
            });
        }
      })
    }, []) 
    return stateAuth;
}

export default useAuthState;