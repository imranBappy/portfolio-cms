import React from "react";

const TextFiled = ({ className = "", label = "", placeholder }) => {
  return (
    <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${className}`}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="title"
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFiled;
