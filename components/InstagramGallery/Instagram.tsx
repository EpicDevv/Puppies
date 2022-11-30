import React from "react";
import IgImg1 from "../../public/puppypics/IMG_20221129_070649_923.jpg";
import IgImg2 from "../../public/puppypics/IMG_20221123_105249_429.jpg";
import IgImg3 from "../../public/puppypics/IMG_20221124_070629_716.jpg";
import IgImg4 from "../../public/puppypics/IMG_20221129_071245_184.jpg";
import IgImg5 from "../../public/puppypics/IMG_20221127_074110_751.jpg";
import IgImg6 from "../../public/puppypics/IMG_20221122_200941_814.jpg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-4">
      <p className="text-2xl font-bold">Follow use on Instagram</p>
      <a href="https://www.instagram.com/samoyed.pups/" target="_blank" rel="noreferrer">
        <p className="pb-4 underline">@samoyed.pups</p>
      </a>
      <a href="https://www.instagram.com/samoyed.pups/" target="_blank" rel="noreferrer">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
      </a>
    </div>
  );
};

export default Instagram;
