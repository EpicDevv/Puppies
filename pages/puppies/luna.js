import PuppyInfo from "../../components/PuppyInfo";

const Luna = () => {
    const puppyData = {
        name: "Luna",
        gender: "Girl",
        available: "Available",
        sliderData: [
          {
            image:
              "/puppypics/IMG_20221123_105249_429.jpg",
          },
          {
            image:
              "/puppypics/IMG_20221127_073559_068.jpg",
          },
          {
            image:
              "/puppypics/IMG_20221129_070759_143.jpg",
          }
        ]
      }
    return (
        <div>
            <PuppyInfo puppyData={puppyData} />
        </div>
    )
}

export default Luna;