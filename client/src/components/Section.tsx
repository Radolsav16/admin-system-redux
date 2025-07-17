import React from "react";
import Table from "./Table";
import NewUserButton from "./NewUserButton";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../app/services/userApiSlice";
import Loading from "./Loading";
import Error from "./Error";


export default function Section():React.JSX.Element{
    const {data,isError,isLoading} = useGetUsersQuery()
    
    return(
        <>
         <section className="card users-container">
            {isLoading && <Loading />}
            {isError && <Error />}
            {data && <Table data = {data}/>}
            <NewUserButton />
            <Pagination />
         </section>
        </>
    )
}