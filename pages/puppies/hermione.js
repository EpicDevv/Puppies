import PuppyInfo from "../../components/PuppyInfo";

const Hermione = () => {
  const puppyData = {
    name: "Hermione",
    gender: "Girl",
    available: "Available",
    sliderData: [
      {
        image: "/puppypics/IMG_20221122_194330_674.jpg",
      },
      {
        image: "/puppypics/IMG_20221124_070933_252.jpg",
      },
      {
        image: "/puppypics/IMG_20221129_071245_184.jpg",
      },
      {
        image: "/puppypics/IMG_20221129_070952_434.jpg",
      },
    ],
  };
  return <PuppyInfo puppyData={puppyData} />;
};

export default Hermione;
