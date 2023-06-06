import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full md:w-full gap-4 mx-auto flex justify-between bg-[#FAF9F6]">
      <div className="flex justify-center items-center p-6 flex-col bg-[#DFD8C5] rounded-r-xl drop-shadow-xl text-[#c4b794]">
        <div className="py-10 flex justify-center items-center">
          <h1 className="uppercase text-xs md:text-xl xl:text-3xl font-bold tracking-widest  text-[#c4b794]">
            about me
          </h1>
        </div>
        <div className="uppercase text-xs md:text-md xl:text-xl font-bold tracking-widest w-full md:w-1/2 text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aut esse nemo rem, illum commodi facere, numquam adipisci veniam
            quisquam unde a reiciendis assumenda obcaecati asperiores, ut minus!
            Earum consequatur libero excepturi, animi incidunt asperiores
            deserunt. Magni cumque voluptatum eaque placeat consequatur,
            asperiores ipsum minus nemo accusamus obcaecati et eligendi.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-6 flex-col bg-[#DFD8C5] rounded-l-xl drop-shadow-xl text-[#c4b794]">
        <div className="py-10 flex justify-center items-center">
          <h1 className="uppercase text-xs md:text-xl xl:text-3xl font-bold tracking-widest  text-[#c4b794]">
            about me
          </h1>
        </div>
        <div className="uppercase text-xs md:text-md xl:text-xl font-bold tracking-widest w-full md:w-1/2 text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aut esse nemo rem, illum commodi facere, numquam adipisci veniam
            quisquam unde a reiciendis assumenda obcaecati asperiores, ut minus!
            Earum consequatur libero excepturi, animi incidunt asperiores
            deserunt. Magni cumque voluptatum eaque placeat consequatur,
            asperiores ipsum minus nemo accusamus obcaecati et eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
