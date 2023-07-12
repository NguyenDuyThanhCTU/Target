"use client";
import Link from "next/link";
import React from "react";
import { GiExitDoor } from "react-icons/gi";
const Exit = () => {
  return (
    <>
      <Link href="/">
        <div className=" border hover:scale-110 duration-300  py-2 px-5 flex items-center cursor-pointer rounded-md hover:bg-white hover:text-blue-900">
          <GiExitDoor className="text-[50px]" /> <p>Về trang chủ</p>
        </div>
      </Link>
    </>
  );
};

export default Exit;
