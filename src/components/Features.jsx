// import React from 'react'

export default function Features() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 capitalize">
        <h1 className="text-7xl">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-9 mt-10">
          <div className="cardcontainer relative  w-1/2 h-[70vh]  ">
            <h1 className="text-[#cdea68]  uppercase absolute z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2  left-full text-6xl leading-none tracking-tighter">
              {"fyde".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative  w-1/2 h-[70vh]  ">
            <h1 className="text-[#cdea68] uppercase absolute z-[9] translate-x-1/2 top-1/2 -translate-y-1/2  right-full text-6xl leading-none tracking-tighter">
              {"vise".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
