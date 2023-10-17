import React from "react";

const Title = (params) => {
    return (
        <div>
            <h3 className="text-whiteText font-semibold text-xl py-1"> {params.text} </h3>
        </div>
    )
}

export default Title