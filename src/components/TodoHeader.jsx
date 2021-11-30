import React from "react";
import "../styles/headertodo.css";

function TodoHeader() {
    const[toggle, setToggle] = React.useState(true)

    const changeTheme = () => {
        if(toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    return(
        <header className="header">
            <h2 className="header__title">TODO</h2>
            <span
                className="header__toggle"
                onClick={changeTheme}
            ></span>
        </header>
    )
}

export { TodoHeader };