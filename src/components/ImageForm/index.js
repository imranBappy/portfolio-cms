"use client";
import React from "react";
import FormBtn from "../common/FormBtn";
import ImageFiled from "../common/ImageFiled";

const ImageForm = ({ imageListState, handleSubmit }) => {
  const [imageList, setImageList] = imageListState;
  // handle add input
  const handleAddInput = () => {
    setImageList([...imageList, { url: "", file: null }]);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, files } = e.target;
    let list = [...imageList];
    list[index] = {
      url: list[index].url,
      file: files ? files[0] : null,
    };
    setImageList(list);
  };

  return (
    <div>
      <div className="mb-8 ">
        {imageList.map((x, i) => (
          <div key={i} className="mb-4">
            <ImageFiled
              value={x}
              name="url"
              onChange={(e) => handleInputChange(e, i)}
              label={`Text ${i + 1}`}
              placeholder={`Enter Text ${i + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <FormBtn addOnClick={handleAddInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ImageForm;
