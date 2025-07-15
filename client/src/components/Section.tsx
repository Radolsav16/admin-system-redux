import React from "react";
import Table from "./Table";
import NewUserButton from "./NewUserButton";
import Pagination from "./Pagination";

export default function Section():React.JSX.Element{
    return(
        <>
         <section className="card users-container">
            <Table />
            <NewUserButton />
            <Pagination />
         </section>
        </>
    )
}