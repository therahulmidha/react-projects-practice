import { configureStore, createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

const storageValues = {
    token: localStorage.getItem("token"),
    expiry: localStorage.getItem("expiry"),
}


const inititalAuthState = {
    isLoggedIn: storageValues.token && new Date(storageValues.expiry) > new Date(),
    authToken: null,
    expiry: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState: inititalAuthState,
    reducers: {
        login: (state, action) => {
            let expirtyDate = new Date(0);
            expirtyDate.setUTCSeconds(action.payload.exp); // expiry we get is in epoch unix time
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("expiry", expirtyDate);
            state.authToken = action.payload.token;
            state.expiry = expirtyDate;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            localStorage.removeItem("token");
            localStorage.removeItem("expiry");
            state.authToken = null;
            state.expiry = null;
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})