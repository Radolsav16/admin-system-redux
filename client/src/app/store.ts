import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user.slice";
import { userApiSlice } from "./services/userApiSlice";



const store = configureStore({
    reducer:{
        users:userReducer,
        [userApiSlice.reducerPath]:userApiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(userApiSlice.middleware)
})


export default store;


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

