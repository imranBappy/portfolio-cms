import React from "react";

const FormBtn = ({ addOnClick }) => {
  return (
    <div className="flex items-center gap-5">
      <button
        className="bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Save
      </button>

      <button
        className="ring-2 w-36 ring-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded "
        type="button"
        onClick={addOnClick}
      >
        Add New
      </button>
    </div>
  );
};

export default FormBtn;
