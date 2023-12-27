import { configureStore } from "@reduxjs/toolkit";

// slices
import userSlice from "../features/user/userSlice";

const leadUserState = () => {
    const serializedState = localStorage.getItem('user');
    console.log(JSON.parse(serializedState));
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

console.log(persistedState);

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    preloadedState: {
        ...preloadedState,
        user: persistedState,
    }
})
