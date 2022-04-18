import React from "react";

const ButtonComponent = ({ setToggle }) => {

    const handleClick = _ => {
        setToggle(true);
    }

    return(
        <div>
            <button onClick={handleClick} >Click Me</button>
        </div>
    )

}

export default ButtonComponent;