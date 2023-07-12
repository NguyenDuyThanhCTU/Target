"use client";
import React, { Suspense } from "react";
import Button from "../Item/Button";
// import Form from "../Item/Form";
import { useStateProvider } from "@context/StateProvider";
import ChangePassword from "./ChangePassword";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../Item/Form"), { ssr: false });

const Authentication = () => {
  const { IsChangePassword } = useStateProvider();
  return (
    <>
      {IsChangePassword ? (
        <>
          <ChangePassword />
        </>
      ) : (
        <>
          <h3 className="text-colortopdownGray text-[20px] font-medium">
            Người quản trị
          </h3>
          <h2 className="text-colortopdownGray text-[24px] font-semibold">
            Đăng nhập
          </h2>
          <Button />
          <div className="border h-0 w-full relative mt-2 mb-4">
            <p className="absolute bg-white d:px-10 py-1 p:px-3 -top-4 d:left-[20%] p:left-[9%]">
              Hoặc tiếp tục với Username
            </p>
          </div>

          <Form />
        </>
      )}
    </>
  );
};

export default Authentication;
