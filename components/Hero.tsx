import React from "react";
import { RxMagicWand } from "react-icons/rx";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 h-screen w-1/2 bg-[#FAF9F6] flex justify-center items-center p-4 text-center">
        <h1 className="text-2xl md:text-4xl xl:text-6xl tracking-widest font-bold uppercase text-[#DFD8C5]">
          Discover me.
        </h1>
      </div>
      <div className="absolute top-0 left-1/2 h-screen w-1/2 bg-[#DFD8C5] flex items-center flex-col justify-center p-4 text-center">
        <h1 className="text-md md:text-xl xl:text-3xl tracking-widest font-thin uppercase break-words text-[#FAF9F6]">
          Explore My Projects and Achievements
        </h1>
        <button className="relative w-30 h-30 flex justify-between items-center border-[#FAF9F6] border-4 mt-32 md:mt-4">
          <div className="w-full bg-[#FAF9F6] text-[#DFD8C5]">Explore</div>
          <div className="w-full bg-[#DFD8C5] text-[#FAF9F6] p-2">
            <RxMagicWand color="#FAF9F6"></RxMagicWand>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
