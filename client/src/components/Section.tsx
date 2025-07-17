import React, { useState } from "react";
import Table from "./Table";
import NewUserButton from "./NewUserButton";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../app/services/userApiSlice";
import Loading from "./Loading";
import Error from "./Error";
import Form from "./Form";



export default function Section():React.JSX.Element{
    const {data,isError,isLoading} = useGetUsersQuery()
    const [isFormShow,showForm] = useState(false)

    
    const toggleForm = () => showForm(!isFormShow)

    return(
        <>
         <section className="card users-container">
            {isLoading && <Loading />}
            {isError && <Error />}
            {isFormShow && <Form toggleForm={toggleForm}/>}
            {data && <Table data = {data}/>}
            
            <NewUserButton toggleForm = {toggleForm}/>
            <Pagination />
         </section>
        </>
    )
}