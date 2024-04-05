import React from "react";

const TextFiled = ({
  className = "",
  label = "",
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${className}`}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="title"
      >
        {label}
      </label>
      <input
        name="content"
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextFiled;
