// import React from 'react'

function About() {
  return (
    <div className="w-full p-20  bg-[#cdea68]  rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="leading-[4.5vw] text-[3vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" flex gap-4 border-t-[1px] pt-10 border-[#959d70] mt-20">
        <div className="w-1/2 capitalize ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="rounded-full flex gap-5 items-center uppercase mt-10 bg-black text-white px-8 py-4">
            read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#b1c959]"></div>
      </div>
    </div>
  );
}

export default About;
