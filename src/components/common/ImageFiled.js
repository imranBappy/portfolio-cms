import Image from "next/image";
import React from "react";
const PLACEHOLDER_IMAGE =
  "https://res.cloudinary.com/do5erbtee/image/upload/v1712328264/expopiwxxloczooebc3t.jpg";


const ImageFiled = ({
  className = "",
  label = "",
  placeholder = "",
  onChange,
  value = { url: "", file: null },
  index,
  ...rest
}) => {
  let src = PLACEHOLDER_IMAGE;
  if (value?.url) {
    src = value.url;
  } else {
    if (value.file) {
      src = URL.createObjectURL(value.file);
    }
  }

  return (
    <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${className}`}>
      <label
        className="
        w-full
        flex
        flex-col
        items-center
        px-4
        py-6
        bg-white
        text-blue-500
        rounded-lg
        shadow-lg
        tracking-wide
        uppercase
        border
        cursor-pointer
        hover:shadow-xl
        transition-all
        duration-300
        "
        htmlFor={
          `image_${index}`
        }
      >
        <Image
          src={src}
          alt="image"
          width={200}
          height={200}
          className="mb-4
          "
        />
        <p
          className="
          mt-2
          text-center
          text-lg
          font-semibold
          text-blue-500
          hover:text-white
          transition-all
          duration-300
          "
        >
          Upload Image
        </p>
      </label>
      <input
        onChange={onChange}
        className="shadow hidden appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={`image_${index}`}
        type="file"
        accept="image/*"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default ImageFiled;
