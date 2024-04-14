"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TextForm from "@/components/TextForm";
import ImageForm from "@/components/ImageForm";
import TextFiled from "@/components/common/TextFiled";
import { createPage, getPage, updatePage, uploadImages } from "@/services";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const CreatePage = () => {
  const [currentTab, setCurrentTab] = useState("text"); // or image'
  const [title, setTitle] = useState("");
  const [inputList, setInputList] = useState([{ content: "" }]);
  const [imageList, setImageList] = useState([{ url: "", file: null }]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchParams.get("edit")) {
      let images = await uploadImages(imageList);
      const upRes = await updatePage({
        _id: searchParams.get("edit"),
        title,
        texts: inputList,
        images: images,
      });
      toast.success(upRes.message);
    } else {
      let images = await uploadImages(imageList);
      const res = await createPage({ title, texts: inputList, images });
      toast.success(res.message);
    }
    router.push("/dashboard");
  };
  useEffect(() => {
    if (!searchParams.get("edit")) return;
    getPage(searchParams.get("edit")).then((res) => {
      setTitle(res.title);
      if (res.texts) setInputList(res.texts);
      if (res.images) setImageList(res.images);
      // if (res.texts?.length > 0) setCurrentTab("image");
    });
  }, [searchParams.get("edit")]);

  return (
    <div className="container  mx-auto px-4 py-8 max-w-[800px]">
      <h1 className="text-2xl font-bold">Create Page</h1>

      <div className="mt-8">
        <form
          className="p-4 shadow-md rounded-md"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="mb-4 flex justify-between ">
            <TextFiled
              value={title}
              label="Title"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Link href="/dashboard/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Page
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-between my-8  gap-5">
            <button
              className={`${
                currentTab === "text"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } font-bold py-2 px-4 rounded ring-2 ring-blue-500 w-full `}
              type="button"
              onClick={() => setCurrentTab("text")}
            >
              Text
            </button>
            <button
              className={`${
                currentTab === "image"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } font-bold py-2 px-4 rounded ring-2 ring-blue-500  w-full`}
              type="button"
              onClick={() => setCurrentTab("image")}
            >
              Image
            </button>
          </div>
          {currentTab === "text" ? (
            <TextForm
              inputListState={[inputList, setInputList]}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ImageForm
              imageListState={[imageList, setImageList]}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
