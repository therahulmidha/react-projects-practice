import { createContext, useCallback, useEffect, useState } from "react";
let logoutTimer;
export const LoginContext = createContext({
  authToken: null,
  isLoggedIn: false,
  login: (token, expiry) => { /* To be implemented */ },
  logout: () => { /* To be implemented */ },
});

export const LoginContextProvider = (props) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [expiry, setExpiry] = useState(localStorage.getItem("expiry"));
  let isLoggedIn = authToken && new Date(expiry) > new Date();

  const loginHandler = (token, expiry) => {
    // The 0 there is the key, which sets the date to the epoch
    let expirtyDate = new Date(0);
    expirtyDate.setUTCSeconds(expiry); // expiry we get is in epoch unix time
    localStorage.setItem("token", token);
    localStorage.setItem("expiry", expirtyDate);
    setAuthToken(token);
    setExpiry(expirtyDate);
  };

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
    setAuthToken(null);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (authToken) {
      logoutTimer = setTimeout(logoutHandler, expiry);
    }

    return (() => {
      clearTimeout(logoutTimer);
    });
  }, [authToken, expiry, logoutHandler]);

  const loginContextValue = {
    authToken,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <LoginContext.Provider value={loginContextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};
