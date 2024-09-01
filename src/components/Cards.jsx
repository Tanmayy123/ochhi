// import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen flex gap-7 px-32 items-center bg-zinc-900">
      <div className="cardContainer w-1/2 h-[50vh] ">
        <div className="card relative flex justify-center items-center rounded-2xl w-full h-full bg-[#004D43]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" absolute left-10 px-5 py-1 rounded-full border-[1px] border-zinc-200 bottom-10">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-10 w-1/2  h-[50vh]  ">
        <div className="card relative flex justify-center bg-[#212121] items-center rounded-2xl w-full h-full bg-[#004D43]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" uppercase -ml-2 absolute left-10 px-5 py-1 rounded-full border-[1px] border-zinc-200 bottom-10">
            rating 5.0 on clutuch
          </button>
        </div>
        <div className="card relative bg-[#212121] flex justify-center items-center rounded-2xl w-full h-full bg-[#004D43]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" uppercase absolute left-10 -ml-5 px-2 py-1 rounded-full border-[1px] border-zinc-200 bottom-10">
            business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
