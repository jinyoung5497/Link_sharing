import { uploadImage } from "../assets/images";

const ProfileDetails = () => {
  return (
    <div className="bg-white rounded-lg p-11 w-7/12 flex flex-col">
      <div className="font-bold text-black text-lg mb-4">Profile Details</div>
      <div className="text-gray mb-4">
        Add your details to create a personal touch to your profile.
      </div>
      <div className="bg-white-off rounded-lg flex mb-5  items-center justify-between p-8 w-full">
        <div className="text-gray justify-self-start">Profile picture</div>
        <div className="flex flex-col items-center justify-center bg-purple-lighter h-48 w-48 rounded-lg text-purple font-semibold cursor-pointer">
          <img src={uploadImage} alt="uploadImage" />
          <p>+ Upload Image</p>
        </div>
        <div className="flex flex-col text-sm text-gray">
          <p>Image must be below 1024x1024px.</p>
          <p>Use PNG or JPG format.</p>
        </div>
      </div>
      <div className="bg-white-off rounded-lg flex flex-col p-10 gap-4">
        <div className="flex gap-4 justify-between items-center">
          <p className="text-gray">First name*</p>
          <input
            type="text"
            className="p-3 w-3/5 rounded-lg border-[1px] border-light-gray"
            placeholder="e.g. John"
          />
        </div>
        <div className="flex gap-4 justify-between items-center">
          <p className="text-gray">Last name*</p>
          <input
            type="text"
            className="p-3 w-3/5 rounded-lg border-[1px] border-light-gray"
            placeholder="e.g. Smith"
          />
        </div>
        <div className="flex gap-4 justify-between items-center">
          <p className="text-gray">Email</p>
          <input
            type="text"
            className="p-3 w-3/5 rounded-lg border-[1px] border-light-gray"
            placeholder="e.g. email@example.com"
          />
        </div>
      </div>
      <div className="border-light-gray border-b-[1px] mt-4"></div>
      <button className="bg-purple p-3 rounded-md text-white font-semibold px-5 w-24 place-self-end translate-y-4">
        Save
      </button>
    </div>
  );
};

export default ProfileDetails;
