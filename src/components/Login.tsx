import { LogoLarge } from "../assets/images";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/store";
import { setPageSignUp } from "../slices/productSlice";
import { NavLink } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.value);
  const setPageToSignUp = () => {
    dispatch(setPageSignUp());
    console.log(products.setPageSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-off">
      <div className="flex flex-col items-center">
        <img src={LogoLarge} alt="Logo" className="relative bottom-10" />
        <div className="flex flex-col leading-9 bg-white p-10 rounded-lg w-[500px]">
          <p className="font-sans font-bold text-lg mb-3">Login</p>
          <p className="text-gray font-thin mb-6">
            Add your details below to get back into the app
          </p>
          <p className="text-sm">Email address</p>
          <input
            type="text"
            className="border-[1px] border-light-gray rounded-md h-11 mb-5 p-6 px-10 email-with-image focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
            placeholder="e.g. alex@email.com"
          />
          <p className="text-sm">Password</p>
          <input
            type="text"
            className="border-[1px] border-light-gray rounded-md h-11 mb-5 p-6 px-10 pw-with-image focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
            placeholder="Enter your password"
          />
          <NavLink
            to={"/linkpage"}
            className="bg-purple rounded-lg p-2 text-white font-semibold mb-5 text-center hover:bg-purple-light"
          >
            Login
          </NavLink>
          <div className="flex gap-2 justify-center">
            <p className="text-gray">Don't have an account? </p>
            <NavLink to={"/signup"} className="text-purple">
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
