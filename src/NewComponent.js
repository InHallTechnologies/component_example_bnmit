import React from "react";

const NewComponent= (props) => {

    return(
        <>
            <div>
                <h1>Hello there</h1>
            </div>
            <div>
                {props.value}
            </div>
        </>
    )
}


export default NewComponent;