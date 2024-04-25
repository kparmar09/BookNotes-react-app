import React from "react";
import { forwardRef } from "react";

function Input(
  { label = "", type = "", name = "", id = "", className = "", ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={label} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        className={`mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
