import { NavLink } from "react-router-dom";
import { LogoLarge } from "../assets/images";
import LinkIcon from "../assets/LinkIcon";
import ProfileDetailsIcon from "../assets/ProfileDetailsIcon";
import { LinkVisual, Links, ProfileDetails } from ".";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../slices/store";
import { getProjectDatails, getLinks } from "../slices/productSlice";
import { useState } from "react";

const LinkPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.value);
  const [linkColor, setLinkColor] = useState("#633cff");
  const [profileColour, setprofileColour] = useState("#737373");

  const openLinks = () => {
    dispatch(getLinks());
    setLinkColor("#633cff");
    setprofileColour("#737373");
  };

  const openDetails = () => {
    dispatch(getProjectDatails());
    setLinkColor("#737373");
    setprofileColour("#633cff");
  };

  return (
    <div className="bg-white-off h-screen flex flex-col">
      {/* topbar */}
      <div className="flex items-center justify-between bg-white p-5 rounded-lg h-24 m-7">
        <img src={LogoLarge} alt="link" />
        <div className="flex gap-10 items-center">
          <div
            onClick={openLinks}
            className={`flex items-center gap-3  font-semibold rounded-md p-3 px-6 cursor-pointer ${
              products.getLinks
                ? "bg-purple-lighter text-purple"
                : "bg-transparent text-gray"
            }`}
          >
            <LinkIcon colour={linkColor} />
            <div>Links</div>
          </div>
          <div
            onClick={openDetails}
            className={`flex items-center gap-3 text-gray font-semibold rounded-md p-3 px-6 cursor-pointer hover:text-purple ${
              products.getProjectDatails
                ? "bg-purple-lighter text-purple"
                : "bg-transparent text-gray"
            }`}
          >
            <ProfileDetailsIcon colour={profileColour} />
            <div>Profile Details</div>
          </div>
        </div>
        <NavLink
          to={"/preview"}
          className="border-[1px] border-purple rounded-md p-3 px-6 text-purple font-semibold hover:bg-purple-lighter"
        >
          Preview
        </NavLink>
      </div>
      <div className="bg-white-off h-full flex px-7 mb-7 gap-5">
        <LinkVisual />
        {products.getProjectDatails ? <ProfileDetails /> : <Links />}
      </div>
    </div>
  );
};

export default LinkPage;
