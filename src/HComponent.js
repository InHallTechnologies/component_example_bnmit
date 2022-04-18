import React from "react";

const HComponent = ({ userInput, toggle }) => {

    return(
        <div>
            <h1>
                {
                    toggle
                    ?
                    userInput
                    :
                    null
                }
            </h1>
        </div>
    )

}

export default HComponent;