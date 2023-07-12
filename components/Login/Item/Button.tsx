"use client";
import { GoogleSignIn } from "@config/Firebase/Service/Auth/GoogleAuth";
import { useData } from "@context/DataProvider";
import { useStateProvider } from "@context/StateProvider";
import { LoginButtonItems, iconMapping } from "@utils/item";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

const Button = () => {
  const router = useRouter();

  const { setVerify, setState } = useStateProvider();
  const { users } = useData();

  const HandleClick = (idx: number) => {
    if (idx === 0) {
      HandleFacebookAuth();
    }
    if (idx === 1) {
      HandleGoogleAuth();
    }
  };

  const HandleFacebookAuth = () => {
    notification["info"]({
      message: "Notification",
      description: "Chức năng đang bảo trì",
    });
  };

  const HandleGoogleAuth = () => {
    GoogleSignIn().then((email) => {
      users.map((items) => {
        if (items.email === email) {
          if (items.admin) {
            setVerify(true);
            notification["success"]({
              message: "Success",
              description: "Chào mừng đến với ${window.location.hostname} !",
            });

            setTimeout(() => {
              setState("isLoading");
            }, 1000);
            setTimeout(() => {
              router.push("/admin");
            }, 2000);
          } else {
            notification["error"]({
              message: "Error",
              description:
                "Vui lòng đăng nhập với tài khoảng được cấp quyền QUẢN TRỊ",
            });
          }
        }
      });
    });
  };

  return (
    <>
      {LoginButtonItems.map((items, idx) => {
        let Icon: IconType = iconMapping[items.icon];
        return (
          <div
            key={idx}
            className="py-2 mb-3 text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mt-3 rounded-lg "
          >
            <div
              className="hover:scale-125 duration-300 cursor-pointer"
              onClick={() => HandleClick(idx)}
            >
              {Icon && (
                <Icon className="text-blue-600 mr-2 inline-block text-[25px]" />
              )}
              {items.name}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Button;
