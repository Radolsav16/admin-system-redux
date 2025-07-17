import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../user.type"



export const userApiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3030/jsonstore',
    }),
    endpoints: builder  =>({
        getUsers:builder.query<{ [key: string]: User },void>({
            query:() => '/users',
        }),
    }),
})


export const {useGetUsersQuery} = userApiSlice;