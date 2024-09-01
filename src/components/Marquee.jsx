// import React from 'react'

import { motion } from "framer-motion";

function Marquee() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      data-scroll-section
      className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]"
    >
      <div className="text border-t-2 overflow-hidden border-b-2 flex whitespace-nowrap uppercase border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 9 }} // Increased duration to 30 seconds
          className="text-[15vw] -mt-3 leading-none font-bold"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 9 }} // Increased duration to 30 seconds
          className="text-[15vw] -mt-3 leading-none font-bold"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
