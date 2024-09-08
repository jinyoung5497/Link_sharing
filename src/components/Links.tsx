import {
  dragAndDrop,
  dropDown,
  // link,
  // empty,
  github,
  twitter,
  linkedIn,
  youtube,
  facebook,
  twitch,
  freecodecamp,
  stackOverflow,
} from "../assets/images";
import Github from "../assets/Github";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/store";
import { isPlatformOpen } from "../slices/productSlice";

const Links = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.value);

  const openPlatformList = () => {
    dispatch(isPlatformOpen());
  };

  return (
    <div className="bg-white rounded-lg p-11 w-7/12 flex flex-col">
      <div className="font-bold text-black text-lg mb-4">
        Customise your links
      </div>
      <div className="text-gray mb-4">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </div>
      <button className="border-[1px] border-purple rounded-lg w-full p-3 text-purple font-semibold hover:bg-purple-lighter">
        + Add new link
      </button>

      {/* <div className=" h-full bg-white-off pt-10 flex flex-col items-center justify-center gap-10 rounded-xl my-5 p-20">
        <img src={empty} alt="empty" className="h-40" />
        <p className="text-lg font-bold">Let's get you started</p>
        <p className="text-gray w-2/3">
          Use the "Add new link" button to get started. Once you have more than
          one link, you can render and edit item. We're here to help you share
          your profiles with everyone!
        </p>
      </div> */}

      <div className=" h-[500px] border-b-[1px] border-light-gray overflow-y-auto pt-10">
        <div className="bg-white-off mb-10 p-5 rounded-xl">
          <div className="mb-3">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={dragAndDrop} alt="dragAndDrop" />
                <div className="font-semibold text-gray">Link #1</div>
              </div>
              <button className="text-gray">Remove</button>
            </div>
          </div>
          <div className="text-sm text-gray mb-1">Platform</div>

          <div
            className="border-[1px] border-light-gray rounded-lg p-3 bg-white flex justify-between mb-4 relative"
            onClick={openPlatformList}
          >
            <div className="flex items-center justify-center gap-4">
              <Github colour="#737373" />
              <div className="text-gray">Github</div>
            </div>
            <img src={dropDown} alt="dropdown" />
            {products.isPlatformOpen && (
              <div className="absolute bg-white w-full top-14 right-0 rounded-lg border-[1px] border-light-gray px-4">
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={github} alt="github" />
                  <p>GitHub</p>
                </div>

                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={twitter} alt="twitter" />
                  <p>Twitter</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={linkedIn} alt="linkedIn" />
                  <p>LinkedIn</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={youtube} alt="youtube" />
                  <p>YouTube</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={facebook} alt="facebook" />
                  <p>Facebook</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={twitch} alt="twitch" />
                  <p>Twitch</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={freecodecamp} alt="freecodecamp" />
                  <p>freeCodeCamp</p>
                </div>
                <div className="flex p-4 border-b-[1px] border-b-light-gray gap-4">
                  <img src={stackOverflow} alt="stackOverflow" />
                  <p>Stack Overflow</p>
                </div>
              </div>
            )}
          </div>

          <div className="text-sm text-gray mb-1">Link</div>
          <input
            type="text"
            placeholder="Type your link"
            className="border-[1px] border-light-gray rounded-lg p-3 bg-white flex justify-start gap-4 mb-4 text-gray link-with-image px-10 w-full focus:shadow-[0_0px_25px_-10px_rgba(0,0,0,1)] focus:shadow-purple outline-none focus:border-purple focus:border-[1px]"
          ></input>
        </div>
      </div>

      <button className="bg-purple p-3 rounded-md text-white font-semibold px-5 w-24 place-self-end translate-y-4 hover:bg-purple-light">
        Save
      </button>
    </div>
  );
};

export default Links;
