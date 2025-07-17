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
        postUser:builder.mutation<User,User>({
            query:(user) => {
                return {
                    url:'/users',
                    method:'POST',
                    body:user
                }
            }
        })
    }),
})


export const {useGetUsersQuery,usePostUserMutation} = userApiSlice;