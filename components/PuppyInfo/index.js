import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const PuppyInfo = ({ puppyData }) => {
  const [current, setCurrent] = useState(0);
  const length = puppyData.sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(puppyData.sliderData) || puppyData.sliderData.length <= 0) {
    return null;
  }
  console.log(puppyData);
  return (
    <div className="min-h-screen justify-center items-center flex flex-col mt-[150px]">
      <div className="text-center text-[50px]">{puppyData.name}</div>
      <div className="text-center -mt-[20px] text-[20px]">
        {puppyData.gender}
      </div>
      <div className="text-center font-bold text-[20px]">
        {puppyData.available}
      </div>

      <div id="gallery" className="max-w-[1240px] mx-auto">
        <div className="relative flex justify-center ">
          {puppyData?.sliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current ? "opacity-[1] ease-in" : "opacity-0"
                }
              >
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt="/"
                    width="1440"
                    height="900"
                    objectFit="contain"
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-red-500">First come first serve</div>
      <div className="text-center">
        Please contact us to hold a puppy for you. <br /> You must make a
        deposit to reserve/hold a puppy.
      </div>
      <div className="text-center">
        Deposit Amount: $500 <br /> (you can pick puppy up anytime after deposit
        is made)
      </div>
      <div className="text-center">Total: $2,000</div>
      <div className="inline-flex bg-emerald-400 rounded-lg p-[20px] flex-col items-center justify-center mb-[100px] mt-[50px]">
        <div>
          <h1 className="text-center mb-3 underline">Call text or email us</h1>
          <a href="mailto: zayne.mngmt@gmail.com">
            {" "}
            <h1 className="mb-1 cursor-pointer bg-white px-[5px] rounded-lg">Email: Zayne.mngmt@gmail.com</h1>
          </a>
          <a href="tel:949-867-8321">
            <h1 className="mb-1 cursor-pointer bg-white px-[5px] rounded-lg">Phone: (949) 867-8321 </h1>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PuppyInfo;
