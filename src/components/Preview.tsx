import { NavLink } from "react-router-dom";
import Github from "../assets/Github";
import { arrow, uploadImage } from "../assets/images";

const Preview = () => {
  return (
    <div className="bg-white-off h-screen relative">
      <div className="bg-purple h-80 rounded-b-3xl p-7 absolute inset-0">
        <div className="flex items-center justify-between bg-white p-5 rounded-lg h-24 ">
          <NavLink
            to={"/links"}
            className="border-[1px] border-purple rounded-md p-3 px-6 text-purple font-semibold "
          >
            Back to editor
          </NavLink>
          <button className="bg-purple rounded-md p-3 px-6 text-white font-semibold ">
            Share Link
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-white items-center justify-center rounded-3xl w-[370px] h-fit py-10 absolute m-auto left-0 right-0 top-0 bottom-0 z-50">
        <img
          src={uploadImage}
          alt="uploadImage"
          className="border-4 border-purple rounded-full w-28 h-28 mb-5"
        />
        <p className="font-semibold text-lg text-black mb-4">Ben Wright</p>
        <p className="text-gray mb-5">ben@example.com</p>
        <div className="flex gap-2 items-center justify-between bg-black rounded-lg w-60 px-4 mt-5">
          <div className="flex items-center justify-center">
            <Github colour={"#FFFFFF"} />
            <div className="text-white p-3">Github</div>
          </div>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="flex gap-2 items-center justify-between bg-black rounded-lg w-60 px-4 mt-5">
          <div className="flex items-center justify-center">
            <Github colour={"#FFFFFF"} />
            <div className="text-white p-3">Github</div>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
