import PuppyInfo from "../../components/PuppyInfo";
import { SliderData } from "../../components/Slider/SliderData";

const Newt = () => {
    const puppyData = {
        name: "Newt",
        gender: "Boy",
        available: "Available",
        sliderData: [
          {
            image:
              "/puppypics/IMG_20221123_105328_786.jpg",
          },
          {
            image:
              "/puppypics/IMG_20221124_071559_494.jpg",
          }
        ]
      }
    return (
        <div>
             <PuppyInfo slides={SliderData} puppyData={puppyData} />
        </div>
    )
}

export default Newt;