import React from "react";

type Props = {
  toggleForm:() => void
}

 const  NewUserButton:React.FC<Props>= ({toggleForm})  => {
    return(
        <>
      <button className="btn-add btn" onClick={toggleForm}>Add new user</button>
        </>
    )
}


export default NewUserButton;