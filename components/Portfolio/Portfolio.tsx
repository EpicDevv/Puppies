import Image from "next/image";
import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <React.Fragment>
<Link href="/puppies" passHref>
      <div id="puppies" className="max-w-[1240px] px-[5px] bg-emerald-200 cursor-pointer mx-auto  text-center">
        <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
          <div className="w-full h-full relative col-span-2 md:col-span-3 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[20px] font-bold ">Percy 🙍‍♂️</div>
            <Image
              src="/puppypics/IMG_20221122_200941_814.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
            <div className="bg-emerald-400 inline-flex px-[5px] rounded-lg mt-[5px]">Available</div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[17px] font-bold ">Severus 🙍‍♂️</div>
            <Image
              src="/puppypics/IMG_20221124_070629_716.jpg"
              alt="/"
              width="215"
              height="217"
              layout="responsive"
              objectFit="cover"
            />
            <div className="bg-emerald-400 inline-flex px-[5px] rounded-lg mt-[5px]">Available</div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[17px] font-bold ">Hermione 💁‍♀️</div>
            <Image
              src="/puppypics/IMG_20221124_070933_252.jpg"
              alt="/"
              width="215"
              height="217"
              layout="responsive"
              objectFit="cover"
            />
            <div className="bg-emerald-400 inline-flex px-[5px] rounded-lg mt-[5px]">Available</div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[17px] font-bold ">Newt 🙍‍♂️</div>
            <Image
              src="/puppypics/IMG_20221124_071559_494.jpg"
              alt="/"
              width="215"
              height="217"
              layout="responsive"
              objectFit="cover"
            />
            <div className="bg-emerald-400 inline-flex px-[5px] rounded-lg mt-[5px]">Available</div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute top-[5px] right-[15px] z-[10] text-white text-[17px] font-bold ">Luna 💁‍♀️</div>
            <Image
              src="/puppypics/IMG_20221129_070759_143.jpg"
              alt="/"
              width="215"
              height="217"
              layout="responsive"
              objectFit="cover"
            />
            <div className="bg-emerald-400 inline-flex px-[5px] rounded-lg mt-[5px]">Available</div>
          </div>
        </div>
      </div>
      </Link>
    </React.Fragment>
  );
};

export default Portfolio;
