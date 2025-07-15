import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { User } from "../app/user.type";

export default function Table:React.FC<User>({data}): React.JSX.Element {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
         <TableHead />
          <tbody>
          {data?.map((user)=> <TableRow
          key={user._id} 
          firstName = {user.firstName}
          lastName = {user.lastName}
          phoneNumber={user.phoneNumber}
          email = {user.email}
          createdAt={user.createdAt}
          />)}
          
          </tbody>
        </table>
      </div>
    </>
  );
}
