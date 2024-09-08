import { phone, arrow, github } from "../assets/images";

const LinkVisual = () => {
  return (
    <div className="w-5/12 h-full bg-white rounded-lg p-5 flex items-center justify-center">
      <img src={phone} alt="phone" />

      <div className="absolute -translate-y-4 bg-black w-[235px] h-11 rounded-md flex items-center justify-between px-5 text-white text-sm">
        <div className="flex gap-2">
          <img src={github} alt="github" />
          <div>Github</div>
        </div>
        <img src={arrow} alt="arrow" className="self" />
      </div>

      <div className="absolute translate-y-12 bg-black w-[235px] h-11 rounded-md flex items-center justify-between px-5 text-white text-sm">
        <div className="flex gap-2">
          <img src={github} alt="github" />
          <div>Github</div>
        </div>
        <img src={arrow} alt="arrow" className="self" />
      </div>

      <div className="absolute translate-y-28 bg-black w-[235px] h-11 rounded-md flex items-center justify-between px-5 text-white text-sm">
        <div className="flex gap-2">
          <img src={github} alt="github" />
          <div>Github</div>
        </div>
        <img src={arrow} alt="arrow" className="self" />
      </div>

      <div className="absolute translate-y-44 bg-black w-[235px] h-11 rounded-md flex items-center justify-between px-5 text-white text-sm">
        <div className="flex gap-2">
          <img src={github} alt="github" />
          <div>Github</div>
        </div>
        <img src={arrow} alt="arrow" className="self" />
      </div>

      <div className="absolute translate-y-60 bg-black w-[235px] h-11 rounded-md flex items-center justify-between px-5 text-white text-sm">
        <div className="flex gap-2">
          <img src={github} alt="github" />
          <div>Github</div>
        </div>
        <img src={arrow} alt="arrow" className="self" />
      </div>
    </div>
  );
};

export default LinkVisual;
