import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../user.type";


const formSlice = createSlice({
    name:"userForm",
    initialState:initialState,
    reducers:{
        updateField:(state,action:PayloadAction<{field :keyof User;value:string}>) =>{
            
            const {field,value} = action.payload;

            state[field] = value;
        },
        resetForm:() => initialState 
    }
})