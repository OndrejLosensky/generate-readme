import React from 'react';

const AddInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        className="text-white bg-transparent border-2 border-bg-white rounded-md px-2 py-1 w-full"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddInput
