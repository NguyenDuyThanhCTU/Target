"use client";
import { useData } from "@context/DataProvider";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [Hide, setHide] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  console.log(Username, Password);
  const router = useRouter();

  const { account } = useData();
  const { setState, setVerify, setIsChangePassword } = useStateProvider();

  const HandleLogin = () => {
    if (
      Username === account[0]?.username &&
      Password === account[0]?.password
    ) {
      setVerify(true);

      notification["success"]({
        message: "Success !",
        description: `Chào mừng đến với ${window.location.hostname} !`,
      });

      setTimeout(() => {
        setState("isLoading");
      }, 1000);
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } else if (!Username || !Password) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    } else {
      notification["error"]({
        message: "Error !",
        description: `Vui lòng đăng nhập với tài khoảng được cấp quyền QUẢN TRỊ`,
      });
    }
  };

  const HandleChangePass = () => {
    if (account[0].username !== Username) {
      notification["error"]({
        message: "Error !",
        description: `Vui lòng nhập tài khoản QUẢN TRỊ vào ô Tài khoản(*)`,
      });
    } else {
      setIsChangePassword(true);
      console.log(false);
    }
  };

  return (
    <>
      {" "}
      <div className="w-full mt-3  h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Tài khoản
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1">
          <input
            type="text"
            className="p-2 w-full font-normal rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full  min-h-[85px] font-semibold text-[13px] ">
        <div className="mb-2">
          Mật khẩu
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1 relative">
          <input
            type={Hide ? "text" : "password"}
            className="p-2  w-full font-normal rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          {Hide ? (
            <BiHide
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(false)}
            />
          ) : (
            <BiShow
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(true)}
            />
          )}
        </div>

        <p
          className={`text-red-600 font-normal ml-2 ${
            errorMessage ? "block " : "hidden"
          }`}
        >
          Vui lòng nhập tài khoản và mật khẩu!
        </p>
      </div>
      <div className=" font-normal w-full">
        <button
          onClick={() => HandleChangePass()}
          className="ml-3 mb-2 hover:underline italic text-[13px]"
        >
          Thay đổi mật khẩu
        </button>
      </div>
      <div className=" mb-4 w-full ">
        <button
          className="py-3 mb-6  text-blue-900 border-2 border-blue-900 w-full hover:bg-blue-900 hover:text-white rounded-lg hover:scale-105 duration-300"
          onClick={() => HandleLogin()}
        >
          Tiếp tục
        </button>
      </div>
    </>
  );
};

export default Form;
