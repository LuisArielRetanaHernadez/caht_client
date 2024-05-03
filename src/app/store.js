import { configureStore } from "@reduxjs/toolkit";

// slices
import userSlice from "../features/user/userSlice";
import contactSlice from "../features/contact/contactSlice";
import errorSlice from "../features/error/errorSlice";
import listChatSlice from "../features/listChat/ListChatSlice";
import themeSlice from "../features/theme/themeSlice";

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
        ID: "",
        name: "",
        username: "",
        email: "",
        photo: "",
        rol: "standar",
        status: 'fulfilled'
    }
}

const persistedState = leadUserState();

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        contact: contactSlice.reducer,
        listChat: listChatSlice.reducer,
        theme: themeSlice.reducer,
        error: errorSlice
    },
    preloadedState: {
        ...preloadedState,
        user: persistedState,
    }
})
