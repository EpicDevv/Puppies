import React from "react";
import Link from "next/link";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex justify-center items-center justify-center bg-[#278000] mb-12 pt-[150px]">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" /> */}
      <div className="p-5 text-black z-[2]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/puppies" passHref>
          <button className="px-8 hover:bg-red-500 py-2 border-black rounded-md border">Reserve a puppy here</button>
        </Link>
      </div>
      <img className="max-w-[100px]" src="/tree.png" />
    </div>
  );
};

export default Hero;
