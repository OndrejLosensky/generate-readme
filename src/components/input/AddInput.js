import React from 'react';


const AddInput = ({ placeholder, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <label>
        <input
          className=" bg-transparent border-2 border-darkColor rounded-md px-2 py-2 w-full"
          type={type} // změnit na proměnnou, pokaždé nastavím typ, zda text nebo jiný
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default AddInput
