import React from "react";
import Exit from "@components/Item/Exit";
import Authentication from "@components/Login/LeftSide/Authentication";

const LoginPage = () => {
  return (
    <>
      {" "}
      {/* <-- Left Side --> */}
      <div className="flex-1  m-5 mt-8 mb-2 flex-col flex items-center justify-center  ">
        <Authentication />
      </div>
      {/* <-- Right Side --> */}
      <div className="d:flex flex-1 p:hidden relative">
        <div className="overflow-hidden h-full">
          <img
            src="https://vieclam24h.vn/img/loginv2/bg-register.png"
            alt=""
            className="object-contain "
          />
        </div>
        <div className="absolute left-1/4 bottom-10 text-white ">
          <Exit />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
