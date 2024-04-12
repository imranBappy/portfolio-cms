"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const x = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default x;
