import axios from "axios";
import React, { useContext, useState } from "react";
import { LoginContext } from "../store_context/auth-context";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store_redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const context = useContext(LoginContext);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      alert("username/password cannot be blank");
      return;
    }
    axios
      .post("/wp-json/jwt-auth/v1/token", {
        username,
        password,
      })
      .then((res) => {
        const { token } = res.data;
        const { exp } = jwtDecode(token);
        // context.login(token, exp);
        dispatch(authActions.login({token, exp}));
      })
      .catch((err) => console.log(err));
  };

  // if (context.isLoggedIn) {
  if (isLoggedIn) {
    return <Navigate to="/book" />;
  }

  return (
    <div className="container mt-5">
      <h1>Login to continue:</h1>
      <br />
      <form onSubmit={submitHandler}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            username
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};
