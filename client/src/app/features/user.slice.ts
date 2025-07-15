import { createSlice } from "@reduxjs/toolkit";
import { User } from "../user.type";


const initialState:User = {
     id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    updatedAt: '',
    imageUrl: '',
    address: {
    country: '',
      city: '',
      street: '',
      streetNumber: ''
    }
}


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        
    } 
})

export const userReducer = userSlice.reducer;

export type UserSlice = typeof userSlice;