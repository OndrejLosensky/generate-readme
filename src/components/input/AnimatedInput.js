import React from "react";

const AnimatedInput = (prompts, type, onChange, placeholder, value) => {
    return(
        <label className='relative cursor-pointer'>
            <input 
            type={type}
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            className='h-20/2 w-96/2 px-6 text-4xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200' />
            <span className='text-4xl text-whiteText text-opacity-80 bg-darkBg absolute left-5 top-5 px-1 transition duration-200 input-text'> {prompts.text} </span>
        </label>
    )
}

export default AnimatedInput