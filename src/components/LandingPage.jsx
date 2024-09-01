// import React from 'react'
import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

const landingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.4"
      className="w-full h-screen capitalize bg-zinc-900 pt-1"
    >
      <div className="textStucture mt-40 capitalize px-20">
        <div className="masker">
          <h1 className="uppercase text-[7vw] leading-[5.5vw] tracking-tighter font-semibold">
            We Create
          </h1>
        </div>
        <div className="masker flex items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
            className="space mt-3"
            style={{
              width: "6rem",
              height: "4.5rem",
              backgroundColor: "white",
            }}
          ></motion.div>
          <h1 className="uppercase text-[7vw] leading-[7.5vw] tracking-tighter font-semibold">
            Eye Opening
          </h1>
        </div>

        <div className="masker">
          <h1 className="uppercase text-[7vw] leading-[5.5vw] tracking-tighter font-semibold">
            Presentations
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-7 px-20">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tigher leading-none "
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md  uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-300 rounded-full  ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
