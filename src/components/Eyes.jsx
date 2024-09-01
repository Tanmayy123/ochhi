// import React from 'react'

import { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="Eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="  relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-12 -translate-x-[50%] -translate-y-[50%]  top-1/2 left-1/2   ">
          <div className="w-[15vw] flex justify-center items-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-1/2 h-1/2 relative bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-12 "
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] flex justify-center items-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-1/2 relative h-1/2 flex justify-center items-center bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-12 "
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
