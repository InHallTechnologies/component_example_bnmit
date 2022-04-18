import React from "react";

const InputComponent = (props) => {

    const handleChange = (event) => {

        props.setUserInput(event.target.value);
        props.setToggle(false)
    }

    return(
        <div>
            <input onChange={handleChange} value={props.userInput} />
        </div>
    )

}

export default InputComponent;