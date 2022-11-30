import PuppyInfo from "../../components/PuppyInfo";
import { SliderData } from "../../components/Slider/SliderData";

const Percy = () => {
  const puppyData = {
    name: "Percy",
    gender: "Boy",
    available: "Available",
    sliderData: [
      {
        image: "/puppypics/IMG_20221122_200941_814.jpg",
      },
      {
        image: "/puppypics/IMG_20221127_074110_751.jpg",
      },
    ],
  };
  return (
    <div>
      <PuppyInfo slides={SliderData} puppyData={puppyData} />
    </div>
  );
};

export default Percy;
