import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookPage } from "./components/BookPage";
import { Books } from "./components/Books";
import { Login } from "./components/Login";
import { LoginContext } from "./store_context/auth-context";
import { authActions } from "./store_redux";
let logoutTimer;
function App() {
  // const context = useContext(LoginContext);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const expiry = useSelector(state => state.auth.expiry);
  
  useEffect(() => {
    if (isLoggedIn) {
      logoutTimer = setTimeout(dispatch(authActions.logout), expiry);
    }

    return (() => {
      clearTimeout(logoutTimer);
    })
  }, [dispatch, expiry, isLoggedIn])

  return (
    <>
      <div className="container">
        <button
          // onClick={context.logout}
          onClick={() => dispatch(authActions.logout())}
          style={{ position: "absolute", left: "80%" }}
        >
          Logout
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
