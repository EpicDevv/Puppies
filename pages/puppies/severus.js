import PuppyInfo from "../../components/PuppyInfo";
import { SliderData } from "../../components/Slider/SliderData";


const Severus = () => {
    const puppyData = {
        name: "Severus",
        gender: "Boy",
        available: "Available",
        sliderData: [
          {
            image:
              "/puppypics/IMG_20221122_194523_584.jpg",
          },
          {
            image:
              "/puppypics/IMG_20221124_070629_716.jpg",
          },
          {
            image:
              "/puppypics/IMG_20221129_070649_923.jpg",
          }
        ]
      }
    return (
        <div>
              <PuppyInfo slides={SliderData} puppyData={puppyData} />
        </div>
    )
}

export default Severus;