import React, { useState } from "react";
import FormBtn from "../common/FormBtn";
import TextFiled from "../common/TextFiled";

const TextForm = () => {
  const [inputList, setInputList] = useState([{ content: "" }]);

  // handle add input
  const handleAddInput = () => {
    setInputList([...inputList, { content: "" }]);
  };

  return (
    <div>
      <div className="mb-8 ">
        {inputList.map((x, i) => (
          <div key={i} className="mb-4">
            <TextFiled
              label={`Text ${i + 1}`}
              placeholder={`Enter Text ${i + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <FormBtn addOnClick={handleAddInput} />
    </div>
  );
};

export default TextForm;
