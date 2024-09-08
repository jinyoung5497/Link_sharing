import { NavLink } from "react-router-dom";
import { LogoLarge } from "../assets/images";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-off">
      <div className="flex flex-col items-center">
        <img src={LogoLarge} alt="Logo" className="relative bottom-10" />
        <div className="flex flex-col leading-9 bg-white p-10 rounded-lg w-[500px]">
          <p className="font-sans font-bold text-lg mb-3">Create account</p>
          <p className="text-gray font-thin mb-6">
            Let's get you started sharing your links!
          </p>
          <p className="text-sm">Email address</p>
          <input
            type="text"
            className="border-[1px] border-light-gray rounded-md h-11 mb-5 p-6 px-10 email-with-image focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
            placeholder="e.g. alex@email.com"
          />
          <p className="text-sm">Create password</p>
          <input
            type="text"
            className="border-[1px] border-light-gray rounded-md h-11 mb-5 p-6 px-10 pw-with-image focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
            placeholder="At least 8 characters"
          />
          <p className="text-sm">Confirm password</p>
          <input
            type="text"
            className="border-[1px] border-light-gray rounded-md h-11 mb-5 p-6 px-10 pw-with-image focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
            placeholder="At least 8 characters"
          />
          <p className="text-sm text-gray mb-5">
            Password must contain at least 8 characters
          </p>
          <button className="bg-purple rounded-lg p-2 text-white font-semibold mb-5 hover:bg-purple-light">
            Create new account
          </button>
          <div className="flex gap-2 justify-center">
            <p className="text-gray">Already have an account? </p>
            <NavLink to={"/"} className="text-purple">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
