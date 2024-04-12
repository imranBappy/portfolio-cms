import React from "react";

const loading = () => {
  return (
    <div
      className="
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            p-24
            "
    >
      <h1
        className="
                text-4xl
                font-bold
                text-center
                text-gray-800
                "
      >
        Loading...
      </h1>
    </div>
  );
};

export default loading;
