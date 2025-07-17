import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const userSlice = createSlice({
    name:'users',
    initialState:initialState,
    reducers:{} 
})

export const userReducer = userSlice.reducer;

export type UserSlice = typeof userSlice;