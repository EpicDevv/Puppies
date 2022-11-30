import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>babypups</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="https://images2.minutemediacdn.com/image/upload/c_crop,w_2764,h_1554,x_0,y_744/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01ggaw7dsf4kgxw6y5zc.jpg" />
      </Head>
      <Hero heading="Surprise your Family for Christmas" message="5 Puppies Born October 14th" />
      
        <Portfolio />
      
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </>
  );
};

export default Home;
