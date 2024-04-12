"use client";
import React, { useState } from "react";
import FormBtn from "../common/FormBtn";
import TextFiled from "../common/TextFiled";

const TextForm = ({ inputListState, handleSubmit }) => {
  const [inputList, setInputList] = inputListState;

  // handle add input
  const handleAddInput = () => {
    setInputList([...inputList, { content: "" }]);
  };

  const handleInputChange = (e, index) => {
    console.log(index);
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  return (
    <div>
      <div className="mb-8 ">
        {inputList.map((x, i) => (
          <div key={i} className="mb-4">
            <TextFiled
              value={x.content}
              onChange={(e) => handleInputChange(e, i)}
              label={`Text ${i + 1}`}
              placeholder={`Enter Text ${i + 1}`}
              className="w-full"
              name="content"
            />
          </div>
        ))}
      </div>

      <FormBtn addOnClick={handleAddInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default TextForm;
