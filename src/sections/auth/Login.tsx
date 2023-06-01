// routes
import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";
// components
import LoginForm from "./LoginForm";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// sections

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  const { userLogin } = useAppSelector((state) => state.admin);
  useEffect(() => {
    if (userLogin) {
      navigate(PATH_DASHBOARD.general.dashboard);
    }
  }, [userLogin]);
  return (
    <div className="bg-[#CFD2E1] bg-login-pattern bg-cover">
      <div className="container flex flex-row items-center max-w-screen-lg md:px-10 mx-auto z-10 justify-center min-h-screen">
        <div className="bg-[#eff2f7] grid   select-none ">
          <div className="grid grid-cols-2 ">
            <div className=" text-center items-center flex justify-center">
              <img
                src="https://nentang.vn/app/images/pages/login.png"
                alt="login"
              />
            </div>
            <div className="bg-[#10163a] text-[#c2c6dc] text-base">
              <div className="flex flex-col px-10">
                <h3 className="text-xl font-normal flex items-center justify-content py-2 text-[#c2c6dc]">
                  Đăng nhập
                </h3>
                <span className="mb-7">
                  Chào mừng bạn đến với trang Quản Lý, vui lòng Đăng nhập.
                </span>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
