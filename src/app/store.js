import { configureStore } from "@reduxjs/toolkit";

// slices
import userSlice from "../features/user/userSlice";
import contactSlice from "../features/contact/contactSlice";
import errorSlice from "../features/error/errorSlice";

const leadUserState = () => {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
        return undefined;
    }
    return JSON.parse(serializedState);
}

const preloadedState = {
    user: { 
        isLogin: false,
        token: "",
        user: {},
        rol: "standar"
    }
}

const persistedState = leadUserState();

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        contact: contactSlice.reducer,
        error: errorSlice
    },
    preloadedState: {
        ...preloadedState,
        user: persistedState,
    }
})
