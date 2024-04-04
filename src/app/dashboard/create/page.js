"use client";
import React, { useState } from "react";
import Link from "next/link";
import TextForm from "@/components/TextForm";
import ImageForm from "@/components/ImageForm";
import TextFiled from "@/components/common/TextFiled";

const CreatePage = () => {
  const [currentTab, setCurrentTab] = useState("text"); // or image

  return (
    <div className="container  mx-auto px-4 py-8 max-w-[800px]">
      <h1 className="text-2xl font-bold">Create Page</h1>

      <div className="mt-8">
        <form>
          <div className="mb-4 flex justify-between ">
            <TextFiled label="Title" placeholder="Enter Title" />
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
          {currentTab === "text" ? <TextForm /> : <ImageForm />}
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
