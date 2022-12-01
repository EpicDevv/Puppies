import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  heading: string;
  message: string;
  header: string;
}

const Hero = ({ heading, message, header }: Props) => {
  return (
    <article className="flex items-center justify-center bg-[#278000]  pt-[150px]">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" /> */}
      <div className="p-5 max-w-[80%] text-black z-[2]">
        <h1 className="text-5xl text-black font-semibold mb-5">{header}</h1>
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/puppies" passHref>
          <button className="px-8 bg-emerald-300 hover:bg-opacity-80 py-2 rounded-md ">Reserve a puppy here</button>
        </Link>
      </div>
      <Image width='100px' height='100px' alt="christmas tree" className="min-w-[100px]" src="/tree.png"></Image>
    </article>
  );
};

export default Hero;
