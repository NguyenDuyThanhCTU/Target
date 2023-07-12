"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";
import { FaSpinner } from "react-icons/fa";
const Loading = () => {
  const { State } = useStateProvider();
  return (
    <>
      {State === "isLoading" && (
        <div className=" bg-gray-500 bg-opacity-50 flex justify-center items-center w-screen h-screen">
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="text-xl font-bold text-primary flex flex-col items-center">
              <FaSpinner className="animate-spin text-2xl text-black " />
              <div className="text-xl font-bold text-white animate-pulse pt-1">
                Loading...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
