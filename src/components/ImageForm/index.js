"use client";
import React, { useState } from "react";
import FormBtn from "../common/FormBtn";
import ImageFiled from "../common/ImageFiled";

const ImageForm = ({ imageListState, handleSubmit }) => {
  const [imageList, setImageList] = imageListState;
  // handle add input
  const handleAddInput = () => {
    setImageList([...imageList, { url: "", file: null }]);
  };

  // handle input change
  const handleInputChange = (index, e) => {
    const { name, files } = e.target;
    let list = [...imageList];
    list[index] = {
      url: "",
      file: files ? files[0] : null,
    };
    setImageList(list);
  };

  return (
    <div>
      <div className="mb-8 ">
        {imageList.map((x, i) => {
          return (
            <div key={i} className="mb-4">
              <ImageFiled
                index={i}
                label="Image"
                value={x}
                onChange={(e) => handleInputChange(i, e)}
              />
            </div>
          );
        })}
      </div>

      <FormBtn addOnClick={handleAddInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ImageForm;
