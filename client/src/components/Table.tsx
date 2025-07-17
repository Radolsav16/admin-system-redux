import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { FetchDataType } from "../app/user.type";





const Table: React.FC<FetchDataType> = ({data}) => {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <TableHead />
          <tbody>
            {Object.values(data).map((user) => (
              <TableRow
                key={user._id}
                firstName={user.firstName}
                lastName={user.lastName}
                phoneNumber={user.phoneNumber}
                email={user.email}
                createdAt={user.createdAt}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

}

export default Table
