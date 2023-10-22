import React from "react";

const Title = (params) => {
    return (
        <div>
            <h3 className="text-whiteText text-center pt-12 uppercase font-semibold text-3xl"> {params.text} </h3>
        </div>
    )
}

export default Title