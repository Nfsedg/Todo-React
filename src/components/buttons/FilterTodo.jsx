import React, { useContext } from "react";
import { newContext } from "../../context/newContext";

const FilterTodo = ({ children }) => {
    return(
        <p>{children}</p>
    )
}

export { FilterTodo }