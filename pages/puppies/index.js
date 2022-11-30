import Image from "next/image";
import Link from "next/link";

const Puppies = () => {
  return (
    <div
      id="puppies"
      className=" mt-[120px] flex flex-col items-center xl:pl-[300px] xl:pr-[300px] justify-center py-16 text-center"
    >
      <h1 className="font-bold text-2xl p-4">Choose a puppy</h1>
      <div className="grid grid-rows-none p-4 gap-4 w-full h-full">
        <Link href="/puppies/percy" passHref>
          <div className="w-full hover:opacity-70 cursor-pointer h-full relative col-span-2 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-[10] text-white text-[25px] font-bold ">
              Percy 🙍‍♂️
            </div>
            
            <div className="absolute top-[5px] left-[15px] z-[10] text-green-300 text-[20px] font-bold ">
              Available
            </div>

            <Image
              className="rounded-lg"
              src="/puppypics/IMG_20221122_200941_814.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
          </div>
        </Link>
        <Link href="/puppies/severus" passHref>
          <div className="w-full hover:opacity-70 cursor-pointer h-full relative col-span-2 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[25px] font-bold ">
              Severus 🙍‍♂️
            </div>

            <div className="absolute top-[5px] left-[15px] z-[10] text-green-300 text-[20px] font-bold ">
              Available
            </div>
            <Image
              className="rounded-lg"
              src="/puppypics/IMG_20221124_070629_716.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
          </div>
        </Link>
        <Link href="/puppies/hermione" passHref>
          <div className="w-full hover:opacity-70 cursor-pointer h-full relative col-span-2 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[25px] font-bold ">
              Hermione 💁‍♀️
            </div>

            <div className="absolute top-[5px] left-[15px] z-[10] text-green-300 text-[20px] font-bold ">
              Available
            </div>
            <Image
              className="rounded-lg"
              src="/puppypics/IMG_20221124_070933_252.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
          </div>
        </Link>
        <Link href="/puppies/newt" passHref>
          <div className="w-full hover:opacity-70 cursor-pointer h-full relative col-span-2 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-10 text-white text-[25px] font-bold ">
              Newt 🙍‍♂️
            </div>

            <div className="absolute top-[5px] left-[15px] z-[10] text-green-300 text-[20px] font-bold ">
              Available
            </div>
            <Image
              className="rounded-lg"
              src="/puppypics/IMG_20221124_071559_494.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
          </div>
        </Link>
        <Link href="/puppies/luna" passHref>
          <div className="w-full hover:opacity-70 cursor-pointer h-full relative col-span-2 row-span-2">
            <div className="absolute top-[5px] right-[15px] z-[10] text-white text-[25px] font-bold ">
              Luna 💁‍♀️
            </div>

            <div className="absolute top-[5px] left-[15px] z-[10] text-green-300 text-[20px] font-bold ">
              Available
            </div>
            <Image
              className="rounded-lg"
              src="/puppypics/IMG_20221129_070759_143.jpg"
              alt="/"
              layout="responsive"
              width="677"
              height="451"
              objectFit="cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Puppies;
